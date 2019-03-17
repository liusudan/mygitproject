SET NAMES UTF8;
DROP DATABASE IF EXISTS st;
CREATE DATABASE st CHARSET=UTF8;
USE st;
#用户信息
CREATE table st_user(
    uid int primary key AUTO_INCREMENT,
    uname varchar(32),
    upwd varchar(32),
    email varchar(64)
);
insert into st_user values(null,"liuliu","123456","644385768@qq.com");
insert into st_user values(null,"mary","123456","mary123@qq.com");
#产品列表
CREATE table st_list(
    pid int primary key AUTO_INCREMENT,
    title varchar(100),
    detail varchar(250),
    price decimal(6,2),
    lid smallint ,           #产品分类编号
    l_img varchar(50),
    c_img varchar(50),
    d_img0 varchar(50),
    d_img1 varchar(50),
    d_img2 varchar(50),
    d_img3 varchar(50),
    d_img4 varchar(50)
);
insert into st_list values(null,"since then海边两件套度假短裤背心针织套装 白色沙滩",null,199.00,"1","img/product_list/d1.jpg","img/product_list/d1_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p1_1.jpg","img/product_detail/p1_2.jpg","img/product_detail/p1_3.jpg","img/product_detail/p1_4.jpg");
insert into st_list values(null,"since then度假复古吊带格子上衣荷叶边半身裙套装女 野餐少女",null,305.00,"1","img/product_list/d2.jpg","img/product_list/d2_2.jpg","img/product_detail/p2_0.jpg","img/product_detail/p2_1.jpg","img/product_detail/p2_2.jpg","img/product_detail/p2_3.jpg","img/product_detail/p2_4.jpg");
insert into st_list values(null,"since then度假港味秋冬女套装红色短款上衣长裙复古风两件小香风",null,256.00,"1","img/product_list/d3.jpg","img/product_list/d3_3.jpg","img/product_detail/p3_0.jpg","img/product_detail/p3_1.jpg","img/product_detail/p3_2.jpg","img/product_detail/p3_3.jpg","img/product_detail/p3_4.jpg");
insert into st_list values(null,"since then度假复古早秋两件套裙气质睡衣风系带时尚女神套装洋气",null,213.00,"1","img/product_list/d4.jpg","img/product_list/d4_4.jpg","img/product_detail/p1_0.jpg","img/product_detail/p4_1.jpg","img/product_detail/p4_2.jpg","img/product_detail/p4_3.jpg","img/product_detail/p4_4.jpg");
insert into st_list values(null,"since then度假风套装女夏2018新款小个子吊带露背心机复古两件套",null,367.00,"1","img/product_list/d5.jpg","img/product_list/d5_5.jpg","img/product_detail/p1_0.jpg","img/product_detail/p5_1.jpg","img/product_detail/p5_2.jpg","img/product_detail/p5_3.jpg","img/product_detail/p5_4.jpg");
insert into st_list values(null,"since then度假风海边初秋套装女时尚性感深V上衣条纹开叉长裙子",null,234.00,"1","img/product_list/d6.jpg","img/product_list/d6_6.jpg","img/product_detail/p1_0.jpg","img/product_detail/p6_1.jpg","img/product_detail/p6_2.jpg","img/product_detail/p6_3.jpg","img/product_detail/p6_4.jpg");
insert into st_list values(null,"since then度假海边蓝色条纹秋冬衣服女套装时尚港味复古风两件套",null,189.00,"1","img/product_list/d7.jpg","img/product_list/d7_7.jpg","img/product_detail/p1_0.jpg","img/product_detail/p7_1.jpg","img/product_detail/p7_2.jpg","img/product_detail/p7_3.jpg","img/product_detail/p7_4.jpg");
insert into st_list values(null,"since then荷叶边V领露腰格子度假套装女夏2018新款显瘦阔腿短裤",null,260.00,"1","img/product_list/d8.jpg","img/product_list/d8_8.jpg","img/product_detail/p1_0.jpg","img/product_detail/p8_1.jpg","img/product_detail/p8_2.jpg","img/product_detail/p8_3.jpg","img/product_detail/p8_4.jpg");
insert into st_list values(null,"since then秋装女2018新款套装时尚两件套气质红个性心机大喇叭袖",null,289.00,"1","img/product_list/d9.jpg","img/product_list/d9_9.jpg","img/product_detail/p1_0.jpg","img/product_detail/p9_1.jpg","img/product_detail/p9_2.jpg","img/product_detail/p9_3.jpg","img/product_detail/p9_4.jpg");
insert into st_list values(null,"since then复古度假风套装女夏2018新款港味格子吊带露背性感短裤",null,340.00,"1","img/product_list/d10.jpg","img/product_list/d10_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p10_1.jpg","img/product_detail/p10_2.jpg","img/product_detail/p10_3.jpg","img/product_detail/p10_4.jpg");
insert into st_list values(null,"since then度假港味秋冬女套装红色短款上衣长裙复古风两件小香风",null,176.00,"1","img/product_list/d11.jpg","img/product_list/d11_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p11_1.jpg","img/product_detail/p11_2.jpg","img/product_detail/p11_3.jpg","img/product_detail/p11_4.jpg");
insert into st_list values(null,"since then蕾丝镂空V领露腰灯笼袖绑带性感秋季套装女度假阔腿裤",null,186.00,"1","img/product_list/d12.jpg","img/product_list/d12_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p12_1.jpg","img/product_detail/p12_2.jpg","img/product_detail/p12_3.jpg","img/product_detail/p123_4.jpg");
insert into st_list values(null,"since then度假民族风性感印花套装两件套女秋冬绑带上衣开叉长裙",null,220.00,"1","img/product_list/d13.jpg","img/product_list/d13_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p13_1.jpg","img/product_detail/p13_2.jpg","img/product_detail/p13_3.jpg","img/product_detail/p13_4.jpg");
insert into st_list values(null,"since then度假港味秋冬女套装红色短款上衣长裙复古风两件小香风",null,159.00,"1","img/product_list/d14.jpg","img/product_list/d14_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p14_1.jpg","img/product_detail/p14_2.jpg","img/product_detail/p14_3.jpg","img/product_detail/p14_4.jpg");
insert into st_list values(null,"since then深V白色印花沙滩度假风短裤套装夏 布达佩斯",null,176.00,"1","img/product_list/d15.jpg","img/product_list/d15_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p15_1.jpg","img/product_detail/p15_2.jpg","img/product_detail/p15_3.jpg","img/product_detail/p15_4.jpg");
insert into st_list values(null,"since then海边度假套装巴厘岛三亚波西米亚风沙滩阔腿裤两件套女",null,250.00,"1","img/product_list/d16.jpg","img/product_list/d16_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p16_1.jpg","img/product_detail/p16_2.jpg","img/product_detail/p16_3.jpg","img/product_detail/p16_4.jpg");
insert into st_list values(null,"since then港味复古风波西米亚沙滩套装女两件套海边度假秋款长袖",null,189.00,"1","img/product_list/d17.jpg","img/product_list/d17_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p17_1.jpg","img/product_detail/p17_2.jpg","img/product_detail/p17_3.jpg","img/product_detail/p17_4.jpg");
insert into st_list values(null,"since then新款春秋复古套装慵懒时尚睡衣风休闲两件套女总攻大人",null,359.00,"1","img/product_list/d18.jpg","img/product_list/d18_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p18_1.jpg","img/product_detail/p18_2.jpg","img/product_detail/p18_3.jpg","img/product_detail/p18_4.jpg");
insert into st_list values(null,"since then港味复古风沙滩套装女两件套海边度假网纱气质小西装女",null,168.00,"1","img/product_list/d19.jpg","img/product_list/d19_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p19_1.jpg","img/product_detail/p19_2.jpg","img/product_detail/p19_3.jpg","img/product_detail/p19_4.jpg");
insert into st_list values(null,"since then波西米亚格子吊带背心沙滩套装女海边度假阔腿裤港味女",null,423.00,"1","img/product_list/d20.jpg","img/product_list/d20_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p20_1.jpg","img/product_detail/p20_2.jpg","img/product_detail/p20_3.jpg","img/product_detail/p20_4.jpg");
insert into st_list values(null,"7since then度假复古风长袖气质洋气套装女秋装时尚格子条纹两件套",null,548.00,"1","img/product_list/d21.jpg","img/product_list/d21_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p21_1.jpg","img/product_detail/p21_2.jpg","img/product_detail/p21_3.jpg","img/product_detail/p21_4.jpg");
insert into st_list values(null,"since then度假风V领秋季套装女时尚两件套2018新款气质长袖套装",null,269.00,"1","img/product_list/d22.jpg","img/product_list/d22_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p22_1.jpg","img/product_detail/p22_2.jpg","img/product_detail/p22_3.jpg","img/product_detail/p22_4.jpg");
insert into st_list values(null,"since then度假复古酒红色一字领上衣开衩阔腿裤套装女 柏林少女",null,235.00,"1","img/product_list/d23.jpg","img/product_list/d23_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p23_1.jpg","img/product_detail/p23_2.jpg","img/product_detail/p23_3.jpg","img/product_detail/p23_4.jpg");
insert into st_list values(null,"since then原创设计法式条纹海边沙滩度假风高腰短裤套装 吉维尼",null,176.00,"1","img/product_list/d24.jpg","img/product_list/d24_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p24_1.jpg","img/product_detail/p24_2.jpg","img/product_detail/p24_3.jpg","img/product_detail/p24_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,423.00,"1","img/product_list/d25.jpg","img/product_list/d25_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p25_1.jpg","img/product_detail/p25_2.jpg","img/product_detail/p25_3.jpg","img/product_detail/p25_4.jpg");
insert into st_list values(null,"since then民国风套装女两件套复古秋装港味气质度假海边",null,356.00,"1","img/product_list/d26.jpg","img/product_list/d26_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p26_1.jpg","img/product_detail/p26_2.jpg","img/product_detail/p26_3.jpg","img/product_detail/p26_4.jpg");
insert into st_list values(null,"since then时尚气质格子复古风港味套装两件套度假海边衬衫短裤女",null,421.00,"1","img/product_list/d27.jpg","img/product_list/d27_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p27_1.jpg","img/product_detail/p27_2.jpg","img/product_detail/p27_3.jpg","img/product_detail/p27_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,325.00,"1","img/product_list/d28.jpg","img/product_list/d28_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p28_1.jpg","img/product_detail/p28_2.jpg","img/product_detail/p28_3.jpg","img/product_detail/p289_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,256.00,"1","img/product_list/d29.jpg","img/product_list/d29_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p29_1.jpg","img/product_detail/p29_2.jpg","img/product_detail/p29_3.jpg","img/product_detail/p29_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,189.00,"2","img/product_list/d30.jpg","img/product_list/d30_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p30_1.jpg","img/product_detail/p30_2.jpg","img/product_detail/p30_3.jpg","img/product_detail/p30_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,289.00,"2","img/product_list/d31.jpg","img/product_list/d31_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p31_1.jpg","img/product_detail/p31_2.jpg","img/product_detail/p31_3.jpg","img/product_detail/p31_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,245.00,"2","img/product_list/d32.jpg","img/product_list/d32_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p32_1.jpg","img/product_detail/p32_2.jpg","img/product_detail/p32_3.jpg","img/product_detail/p32_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,256.00,"2","img/product_list/d33.jpg","img/product_list/d33_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p33_1.jpg","img/product_detail/p33_2.jpg","img/product_detail/p33_3.jpg","img/product_detail/p33_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,189.00,"2","img/product_list/d34.jpg","img/product_list/d34_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p34_1.jpg","img/product_detail/p34_2.jpg","img/product_detail/p34_3.jpg","img/product_detail/p34_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,199.00,"2","img/product_list/d35.jpg","img/product_list/d35_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p35_1.jpg","img/product_detail/p35_2.jpg","img/product_detail/p35_3.jpg","img/product_detail/p35_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,245.00,"3","img/product_list/d36.jpg","img/product_list/d36_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p36_1.jpg","img/product_detail/p36_2.jpg","img/product_detail/p36_3.jpg","img/product_detail/p36_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,188.00,"3","img/product_list/d37.jpg","img/product_list/d37_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p37_1.jpg","img/product_detail/p37_2.jpg","img/product_detail/p37_3.jpg","img/product_detail/p37_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,243.00,"3","img/product_list/d38.jpg","img/product_list/d38_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p38_1.jpg","img/product_detail/p38_2.jpg","img/product_detail/p38_3.jpg","img/product_detail/p38_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,169.00,"3","img/product_list/d39.jpg","img/product_list/d39_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p39_1.jpg","img/product_detail/p39_2.jpg","img/product_detail/p39_3.jpg","img/product_detail/p39_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,258.00,"3","img/product_list/d40.jpg","img/product_list/d40_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p40_1.jpg","img/product_detail/p40_2.jpg","img/product_detail/p40_3.jpg","img/product_detail/p40_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,199.00,"3","img/product_list/d41.jpg","img/product_list/d41_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p41_1.jpg","img/product_detail/p41_2.jpg","img/product_detail/p41_3.jpg","img/product_detail/p41_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,188.00,"4","img/product_list/d42.jpg","img/product_list/d42_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p42_1.jpg","img/product_detail/p42_2.jpg","img/product_detail/p42_3.jpg","img/product_detail/p42_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,254.00,"4","img/product_list/d43.jpg","img/product_list/d43_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p43_1.jpg","img/product_detail/p43_2.jpg","img/product_detail/p43_3.jpg","img/product_detail/p43_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,214.00,"4","img/product_list/d44.jpg","img/product_list/d44_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p44_1.jpg","img/product_detail/p44_2.jpg","img/product_detail/p44_3.jpg","img/product_detail/p44_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,231.00,"4","img/product_list/d45.jpg","img/product_list/d45_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p45_1.jpg","img/product_detail/p45_2.jpg","img/product_detail/p45_3.jpg","img/product_detail/p45_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,247.00,"4","img/product_list/d46.jpg","img/product_list/d46_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p46_1.jpg","img/product_detail/p46_2.jpg","img/product_detail/p46_3.jpg","img/product_detail/p46_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,268.00,"4","img/product_list/d47.jpg","img/product_list/d47_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p47_1.jpg","img/product_detail/p47_2.jpg","img/product_detail/p47_3.jpg","img/product_detail/p47_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,358.00,"5","img/product_list/d48.jpg","img/product_list/d48_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p48_1.jpg","img/product_detail/p48_2.jpg","img/product_detail/p48_3.jpg","img/product_detail/p48_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,421.00,"5","img/product_list/d49.jpg","img/product_list/d49_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p49_1.jpg","img/product_detail/p49_2.jpg","img/product_detail/p49_3.jpg","img/product_detail/p49_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,369.00,"5","img/product_list/d50.jpg","img/product_list/d50_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p50_1.jpg","img/product_detail/p50_2.jpg","img/product_detail/p50_3.jpg","img/product_detail/p50_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,258.00,"5","img/product_list/d51.jpg","img/product_list/d51_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p51_1.jpg","img/product_detail/p51_2.jpg","img/product_detail/p51_3.jpg","img/product_detail/p51_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,425.00,"5","img/product_list/d52.jpg","img/product_list/d52_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p52_1.jpg","img/product_detail/p52_2.jpg","img/product_detail/p52_3.jpg","img/product_detail/p52_4.jpg");
insert into st_list values(null,"since then格子翻领撞色卷边西装套装女2018新款春秋复古休闲外套",null,345.00,"5","img/product_list/d53.jpg","img/product_list/d53_1.jpg","img/product_detail/p1_0.jpg","img/product_detail/p53_1.jpg","img/product_detail/p53_2.jpg","img/product_detail/p53_3.jpg","img/product_detail/p53_4.jpg");


#购物车列表
CREATE table st_cart(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  count INT,
  pid int,
  uid int
);