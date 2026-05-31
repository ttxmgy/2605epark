"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserId = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUserId = (0, common_1.createParamDecorator)((_, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user?.userId;
});
//# sourceMappingURL=current-user.decorator.js.map