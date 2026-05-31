"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseScreenshotText = parseScreenshotText;
function normalizeText(text) {
    return text
        .replace(/\r/g, '\n')
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{2,}/g, '\n')
        .trim();
}
function pickFirstMatch(text, re) {
    const m = text.match(re);
    return m?.[1] ?? null;
}
function parseDateYmdSlash(s) {
    const m = s.match(/\b(20\d{2})\/(\d{2})\/(\d{2})\b/);
    if (!m)
        return null;
    return `${m[1]}-${m[2]}-${m[3]}`;
}
function parseDateCn(s) {
    const m = s.match(/(20\d{2})年(\d{1,2})月(\d{1,2})日/);
    if (!m)
        return null;
    const mm = m[2].padStart(2, '0');
    const dd = m[3].padStart(2, '0');
    return `${m[1]}-${mm}-${dd}`;
}
function parseTimeWindow(s) {
    const m = s.match(/\b(\d{2}:\d{2})-(\d{2}:\d{2})\b/);
    if (!m)
        return null;
    return `${m[1]}-${m[2]}`;
}
function parseScreenshotText(raw) {
    const text = normalizeText(raw);
    if (!text) {
        return { page_type: 'UNKNOWN', text };
    }
    if (text.includes('预约记录')) {
        const items = [];
        const blocks = text.split(/\n(?=年卡预约|非指定日门票预约|指定日门票预约|预约类型)/g);
        for (const b of blocks) {
            const date = pickFirstMatch(b, /\b(20\d{2}\/\d{2}\/\d{2})\b/);
            const visit_date = date ? parseDateYmdSlash(date) : null;
            const time_window = pickFirstMatch(b, /入园时间\s*(\d{2}:\d{2}-\d{2}:\d{2})/);
            const status = b.includes('未过期') ? 'VALID' : b.includes('已核销') ? 'REDEEMED' : b.includes('已过期') ? 'EXPIRED' : 'UNKNOWN';
            const category = pickFirstMatch(b, /(年卡预约|非指定日门票预约|指定日门票预约)/);
            const guestCountStr = pickFirstMatch(b, /预约游客\((\d+)\s*位\)/);
            const guest_count = guestCountStr ? Number(guestCountStr) : null;
            const guest_name = pickFirstMatch(b, /预约游客\(\d+\s*位\)\s*:\s*([^\n]+)/);
            if (visit_date) {
                items.push({
                    category,
                    visit_date,
                    time_window: time_window ?? null,
                    status,
                    guest_count,
                    guest_name: guest_name?.replace(/\s+/g, ' ') ?? null,
                });
            }
        }
        return { page_type: 'RESERVATION_LIST', items, text };
    }
    if (text.includes('预约凭证')) {
        const visit_date = parseDateCn(text) ?? parseDateYmdSlash(text) ?? null;
        const time_window = pickFirstMatch(text, /\b(\d{2}:\d{2}-\d{2}:\d{2})\b/);
        const name = pickFirstMatch(text, /预约凭证[\s\S]*?\n.*?\n.*?\n.*?\n.*?([^\n]{2,8})\s*\*?/);
        const code = pickFirstMatch(text, /\b([A-Z]{2,6}\d{10,})\b/);
        return {
            page_type: 'RESERVATION_VOUCHER_QR',
            visit_date,
            entry_time_window: time_window ?? null,
            guest_name: name ?? null,
            voucher_code_text: code ?? null,
            text,
        };
    }
    if (text.includes('运营时间')) {
        const month = pickFirstMatch(text, /\b(20\d{2})年(\d{2})月\b/);
        const venues = [];
        const venueMatches = [...text.matchAll(/([^\n]{2,20})\s*运营时间\s*(\d{2}:\d{2})-(\d{2}:\d{2})/g)];
        for (const m of venueMatches) {
            venues.push({ venue_name: m[1].trim(), open_time: m[2], close_time: m[3] });
        }
        return { page_type: 'PARK_HOURS', month, venues, text };
    }
    if (text.includes('餐厅')) {
        const waitBadges = [...text.matchAll(/等待\s*(\d{1,3})\s*分钟/g)].map((m) => Number(m[1]));
        return { page_type: 'RESTAURANT_LIST', wait_badges: waitBadges, text };
    }
    if (text.includes('玩乐')) {
        const waitBadges = [...text.matchAll(/等待\s*(\d{1,3})\s*分钟/g)].map((m) => Number(m[1]));
        return { page_type: 'ATTRACTION_LIST', wait_badges: waitBadges, text };
    }
    if (text.includes('演出')) {
        const nextTimes = [...text.matchAll(/\b([01]\d|2[0-3]):[0-5]\d\b(?=\s*下一场)/g)].map((m) => m[0]);
        return { page_type: 'SHOW_LIST', next_times: nextTimes, text };
    }
    return { page_type: 'UNKNOWN', text };
}
//# sourceMappingURL=parser.js.map