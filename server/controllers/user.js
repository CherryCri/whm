const { query } = require('../mysql')
module.exports = async (ctx, next) => {
	console.log("getuser:"+ctx.state.$wxInfo.loginState);
    // 通过 Koa 中间件进行登录态校验之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState === 1) {
        // loginState 为 1，登录态校验成功
        
        //通过open_id重新从数据库获取用户
        var result =  await query("select u.*,c.name as company_name from cSessionInfo u left join tb_company c on u.company_id = c.id where open_id = ?",[ctx.state.$wxInfo.userinfo.openId]);
        //修改ctx中存储的用户信息
        ctx.state.$wxInfo.userinfo.company_name=result[0].company_name;
        ctx.state.$wxInfo.userinfo.company_reviewed=result[0].company_reviewed;
        ctx.state.$wxInfo.userinfo.company_id=result[0].company_id;


        ctx.state.data = ctx.state.$wxInfo.userinfo
    } else {
        ctx.state.code = -1
    }
}
