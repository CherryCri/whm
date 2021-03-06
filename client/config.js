/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://t0qyjxur.qcloud.la';
//var host = 'https://22c3ba27.ngrok.io';
//var host = "https://4c4ac3bb.ngrok.io"

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 获取当前用户信息，用于测试会话
    getLoginUserUrl: `${host}/weapp/user`,


    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,

    // 门店接口
    shopList: `${host}/weapp/shop/list`,
    getShop: `${host}/weapp/shop/getone`,
    addShop: `${host}/weapp/shop/add`,


    // 产品接口
    productList: `${host}/weapp/product/list`,
    getProductByBarCode: `${host}/weapp/product/getByBarCode`, 
    addProduct: `${host}/weapp/product/add`,
    searchProduct: `${host}/weapp/product/search`,

    // 仓库接口
    getStore: `${host}/weapp/store/getone`,
    getStoreListByShop: `${host}/weapp/store/getListByShop`,
    addStore: `${host}/weapp/store/add`,

    //仓位接口
    positionList: `${host}/weapp/position/list`,
    addPosition: `${host}/weapp/position/add`,

    // 库存接口
    getInventoryBySidAndPid: `${host}/weapp/inventory/getBySidAndPid`,
    listInventory: `${host}/weapp/inventory/list`,
    optionInventory: `${host}/weapp/inventory/optionInventory`,


    //公司接口
    getCompanyByName: `${host}/weapp/company/getByName`,
    joinCompany: `${host}/weapp/company/join`,
    test: `${host}/weapp/company`,


  }
};

module.exports = config;
