const express=require('express');
const bodyParser=require('body-parser');
const pool=require("./pool");
var app=express();
app.listen(3000);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:false
}));

const cors=require("cors");
app.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"],
    credentials:true
}));
/*
//下载express-session模块并配置
const session=require("express-session");
app.use(session({
  secret:"128位随机字符",//安全字符串
  resave:false,       //每次请求是否更新数据
  saveUninitialized:true,    //初始化时保存数据
  cookie:{
    maxAge:1000*60*60*8
  }
}))
*/
//用户登录
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    if(!uname){
        res.send({code:-1,msg:"用户名为空"});
        return;
    }
    if(!upwd){
        res.send({code:-1,msg:"密码为空"});
        return;
    }
    var sql="select uid from st_user where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
        res.send({code:-1,msg:"用户名或密码错误"});
    }else{
        //var uid=result[0].id;
        res.send({code:1,data:result});
}
})
})
//用户注册
app.post("/register",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var email=req.body.email;
    if(!uname){
		res.send({code:401,msg:'uname required'});
		return;
    }
    if(!upwd){
		res.send({code:401,msg:'upwd required'});
		return;
    }
    if(!email){
		res.send({code:401,msg:'email required'});
		return;
    }
    pool.query('insert into st_user set ?',[req.body],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register success'});
		}
	});
})
//商品列表
app.get("/productlist",(req,res)=>{
    var lid=req.query.lid;
    if(lid){
        var sql="select * from st_list where lid=?";
        pool.query(sql,[lid],(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }else if(!lid){
        var sql="select * from st_list";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }
    
})
//商品详情
app.get("/productdetail",(req,res)=>{
    var pid=parseInt(req.query.pid);
    var sql="select * from st_list where pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//添加到购物车
app.get("/addcart",(req,res)=>{
    var pid=parseInt(req.query.pid);
    var uid=parseInt(req.query.uid);
    var count=parseInt(req.query.count);
    if(!uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }
    if(!pid){
        res.send({code:-2,msg:"添加失败"});
        return;
    }
    if(!count){
        count=1;
    }
    var sql="select id from st_cart where uid=? and pid=? ";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
          var sql="insert into st_cart values(null,"+count+","+pid+","+uid+")";
        }else{
          var sql=`update st_cart set count=count+${count} where pid=${pid} and uid=${uid}`;
        }
        pool.query(sql,(err,result)=>{
          if(err) throw err;
          if(result.affectedRows>0){
            res.send({code:1,msg:"添加成功"});
          }else{
            res.send({code:-3,msg:"添加失败"});
          }
        })
      })
})
//获取购物车列表
app.get("/getaddlist",(req,res)=>{
  var uid=parseInt(req.query.uid);
  if(!uid){
    res.send({code:-1,msg:"请登录"})
    return;
  }
  var sql="select c.id,c.count,l.price,c.uid,c.pid,l.title,l.l_img from st_cart c,st_list l where l.pid=c.pid and c.uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})
//删除购物车列表
app.get("/deletecart",(req,res)=>{
  var id=parseInt(req.query.id);
  var sql="delete from st_cart where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})
//增加减少购物车数量
app.get("/changecart",(req,res)=>{
    var id=parseInt(req.query.id);
    var count=parseInt(req.query.count);
    var sql="update st_cart set count=? where id=?";
    pool.query(sql,[count,id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-1,msg:"修改失败"});
        }
    })
})
