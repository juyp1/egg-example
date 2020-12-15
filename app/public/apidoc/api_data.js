define({ "api": [
  {
    "group": "用户管理",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/controller/users.js",
    "groupTitle": "用户管理",
    "name": ""
  },
  {
    "type": "post",
    "url": "users/uputuInfo",
    "title": "用户信息修改",
    "name": "用户信息修改",
    "group": "用户管理",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "upass",
            "description": "<p>新的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "filename": "app/controller/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "users/uregister",
    "title": "用户注册",
    "name": "用户注册",
    "group": "用户管理",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uemail",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "upass",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uname",
            "description": "<p>真实姓名</p>"
          }
        ]
      }
    },
    "filename": "app/controller/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "users/signin",
    "title": "用户登录",
    "name": "用户登录",
    "group": "用户管理",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uemail",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "upass",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "filename": "app/controller/users.js",
    "groupTitle": "用户管理"
  },
  {
    "group": "通用接口",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/controller/comm.js",
    "groupTitle": "通用接口",
    "name": ""
  },
  {
    "type": "post",
    "url": "comm/upload/img",
    "title": "上传图片",
    "name": "上传图片",
    "group": "通用接口",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "imgurl",
            "description": "<p>图片、文件信息</p>"
          }
        ]
      }
    },
    "filename": "app/controller/comm.js",
    "groupTitle": "通用接口"
  }
] });
