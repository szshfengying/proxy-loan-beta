var CacheEngine={HTTPCache:0,MemoryCache:1,RedisCache:2,name:{HTTPCache:"HTTPCache",MemoryCache:"MemoryCache",RedisCache:"RedisCache"},message:{HTTPCache:"HTTPCache",MemoryCache:"MemoryCache",RedisCache:"RedisCache"}};var ChartType={Spline:0,Column:1,Pie:2,Area:3,name:{Spline:"Spline",Column:"Column",Pie:"Pie",Area:"Area"},message:{Spline:"曲线图",Column:"柱形图",Pie:"饼图",Area:"面积图"}};var RedisCacheMethod={Value:1,List:2,Set:4,SortedSet:8,name:{Value:"Value",List:"List",Set:"Set",SortedSet:"SortedSet"},message:{Value:"Value",List:"List",Set:"Set",SortedSet:"SortedSet"}};var SystemEnvironment={DEV:0,SIT:1,UAT:2,PRO:3,name:{DEV:"DEV",SIT:"SIT",UAT:"UAT",PRO:"PRO"},message:{DEV:"DEV",SIT:"SIT",UAT:"UAT",PRO:"PRO"}};var Terminal={iOS:0,Android:1,H5:2,name:{iOS:"iOS",Android:"Android",H5:"H5"},message:{iOS:"iOS",Android:"Android",H5:"H5"}};var ApplyFormFieldValueLimitType={Regex:0,Enum:1,name:{Regex:"Regex",Enum:"Enum"},message:{Regex:"正则表达式",Enum:"枚举"}};var CustomServiceType={WeiXin:0,QQ:1,name:{WeiXin:"WeiXin",QQ:"QQ"},message:{WeiXin:"微信客服",QQ:"QQ客服"}};var EducationSituation={MasterDegreeAndAbove:0,Undergraduate:10,JuniorCollege:11,HighSchoolAndAbove:20,PrimarySchool:30,None:100,name:{MasterDegreeAndAbove:"MasterDegreeAndAbove",Undergraduate:"Undergraduate",JuniorCollege:"JuniorCollege",HighSchoolAndAbove:"HighSchoolAndAbove",PrimarySchool:"PrimarySchool",None:"None"},message:{MasterDegreeAndAbove:"硕士及以上",Undergraduate:"本科",JuniorCollege:"大专",HighSchoolAndAbove:"中专",PrimarySchool:"小学",None:"无"}};var FieldCode={Name:0,IdentityCode:1,FrontOfIDCard:2,BackOfIDCard:3,IDCardInHand:4,CellPhoneNumber:5,QQ:6,Area:7,Address:8,FathersName:9,FathersPhoneNumber:10,MothersName:11,MothersPhoneNumber:12,SpousesName:13,SpousesPhoneNumber:14,CompanyName:15,CompanyAddress:16,CompanyPhoneNumber:17,PostName:18,MonthlyIncome:19,WagePaymentMethod:20,SocialSecuritySituation:21,JDBTotalLiabilities:22,JDBTotalRepayment:23,JJDTotalLiabilities:24,JJDTotalRepayment:25,RepaymentTodaySituation:26,OverdueSituation:27,ZMXYPoints:28,AlipayAccount:29,OperatorPassword:30,WeiXinNo:31,HuaBeiQuota:32,IP:33,PhoneModel:34,AddressBook:35,MarriageSituation:36,EducationSituation:37,JieBeiQuota:38,ProvidentFundSituation:39,PropertySituation:40,VehicleSituation:41,ColleagueName:42,ColleaguePhoneNumber:43,ZhiMaCreditantifraudverify:44,FrontOfIDCardCheckInfo:45,name:{Name:"Name",IdentityCode:"IdentityCode",FrontOfIDCard:"FrontOfIDCard",BackOfIDCard:"BackOfIDCard",IDCardInHand:"IDCardInHand",CellPhoneNumber:"CellPhoneNumber",QQ:"QQ",Area:"Area",Address:"Address",FathersName:"FathersName",FathersPhoneNumber:"FathersPhoneNumber",MothersName:"MothersName",MothersPhoneNumber:"MothersPhoneNumber",SpousesName:"SpousesName",SpousesPhoneNumber:"SpousesPhoneNumber",CompanyName:"CompanyName",CompanyAddress:"CompanyAddress",CompanyPhoneNumber:"CompanyPhoneNumber",PostName:"PostName",MonthlyIncome:"MonthlyIncome",WagePaymentMethod:"WagePaymentMethod",SocialSecuritySituation:"SocialSecuritySituation",JDBTotalLiabilities:"JDBTotalLiabilities",JDBTotalRepayment:"JDBTotalRepayment",JJDTotalLiabilities:"JJDTotalLiabilities",JJDTotalRepayment:"JJDTotalRepayment",RepaymentTodaySituation:"RepaymentTodaySituation",OverdueSituation:"OverdueSituation",ZMXYPoints:"ZMXYPoints",AlipayAccount:"AlipayAccount",OperatorPassword:"OperatorPassword",WeiXinNo:"WeiXinNo",HuaBeiQuota:"HuaBeiQuota",IP:"IP",PhoneModel:"PhoneModel",AddressBook:"AddressBook",MarriageSituation:"MarriageSituation",EducationSituation:"EducationSituation",JieBeiQuota:"JieBeiQuota",ProvidentFundSituation:"ProvidentFundSituation",PropertySituation:"PropertySituation",VehicleSituation:"VehicleSituation",ColleagueName:"ColleagueName",ColleaguePhoneNumber:"ColleaguePhoneNumber",ZhiMaCreditantifraudverify:"ZhiMaCreditantifraudverify",FrontOfIDCardCheckInfo:"FrontOfIDCardCheckInfo"},message:{Name:"姓名",IdentityCode:"身份证号码",FrontOfIDCard:"身份证正面照",BackOfIDCard:"身份证背面照",IDCardInHand:"手持身份证照",CellPhoneNumber:"手机号码",QQ:"QQ号码",Area:"所在地区",Address:"详细地址",FathersName:"姓名",FathersPhoneNumber:"电话号码",MothersName:"姓名",MothersPhoneNumber:"电话号码",SpousesName:"姓名",SpousesPhoneNumber:"电话号码",CompanyName:"名称",CompanyAddress:"地址",CompanyPhoneNumber:"电话号码",PostName:"职务名称",MonthlyIncome:"月收入(元)",WagePaymentMethod:"工资发放方式",SocialSecuritySituation:"社保情况",JDBTotalLiabilities:"总负债(元)",JDBTotalRepayment:"已还款(元)",JJDTotalLiabilities:"总负债(元)",JJDTotalRepayment:"已还款(元)",RepaymentTodaySituation:"今日还款情况",OverdueSituation:"逾期情况",ZMXYPoints:"芝麻信用分",AlipayAccount:"支付宝账号",OperatorPassword:"运营商密码",WeiXinNo:"微信号",HuaBeiQuota:"花呗额度",IP:"IP地址",PhoneModel:"手机型号",AddressBook:"通讯录",MarriageSituation:"婚姻状况",EducationSituation:"学历情况",JieBeiQuota:"借呗额度",ProvidentFundSituation:"公积金情况",PropertySituation:"房产情况",VehicleSituation:"车辆情况",ColleagueName:"姓名",ColleaguePhoneNumber:"电话号码",ZhiMaCreditantifraudverify:"芝麻欺诈信息验证",FrontOfIDCardCheckInfo:"身份证正面照校验信息"}};var InternetCertificationType={JingDong:0,name:{JingDong:"JingDong"},message:{JingDong:"jd_crawl"}};var JieDaiZhuanJiaType={NewUser:0,NewApplyForm:1,name:{NewUser:"NewUser",NewApplyForm:"NewApplyForm"},message:{NewUser:"/api.user.registerfeedback",NewApplyForm:"/api.order.approvefeedback"}};var MarriageSituation={UnMarried:0,Married:1,name:{UnMarried:"UnMarried",Married:"Married"},message:{UnMarried:"未婚",Married:"已婚"}};var MerchantSettingCode={WeiXinCustomerService:0,QQCustomerService:1,name:{WeiXinCustomerService:"WeiXinCustomerService",QQCustomerService:"QQCustomerService"},message:{WeiXinCustomerService:"微信",QQCustomerService:"企鹅"}};var OverdueSituation={None:0,LessThan7Days:7,LessThan30Days:30,name:{None:"None",LessThan7Days:"LessThan7Days",LessThan30Days:"LessThan30Days"},message:{None:"无逾期",LessThan7Days:"有，7天内",LessThan30Days:"有，30天内"}};var PropertySituation={None:0,ReadyToBuy:1,UnderTheName:2,name:{None:"None",ReadyToBuy:"ReadyToBuy",UnderTheName:"UnderTheName"},message:{None:"无房",ReadyToBuy:"准备购买",UnderTheName:"名下有房"}};var ProvidentFundSituation={NotPurchased:0,AlreadyPurchased:1,name:{NotPurchased:"NotPurchased",AlreadyPurchased:"AlreadyPurchased"},message:{NotPurchased:"未购买",AlreadyPurchased:"已购买"}};var PushNoticeType={ApplyFormStatusNotice:0,NewApplyFormNotice:1,name:{ApplyFormStatusNotice:"ApplyFormStatusNotice",NewApplyFormNotice:"NewApplyFormNotice"},message:{ApplyFormStatusNotice:"申请单状态",NewApplyFormNotice:"新申请单"}};var RechargeType={SMS:0,Flow:1,AlipayReport:2,name:{SMS:"SMS",Flow:"Flow",AlipayReport:"AlipayReport"},message:{SMS:"短信",Flow:"流量",AlipayReport:"支付宝报告"}};var RepaymentTodaySituation={No:0,Yes:1,name:{No:"No",Yes:"Yes"},message:{No:"无今日还款",Yes:"有今日还款"}};var RoleCode={GuanLiYuan_D8A4B9DEE8AA8FD8:0,QuDao_65EB9FED4A82D56C:1,ShangJiaCaiWuGuanLiYuan_5AA1F84720F218A2:2,ShangJiaCaiWu_7C356CE163F72E1B:3,ShangJiaDaoLiangGuanLiYuan_2596FECE7F44735C:4,ShangJiaDuanXinGuanLiYuan_8713ABE50F94937A:5,ShangJiaFenPeiYuan_4C032DECBA57452B:6,ShangJiaFuZhiGuanLiYuan_6EDE0E5F7C703B95:7,ShangJiaGuanLiYuan_E21083EE2BC55861:8,ShangJiaKeFu_E235FB546C2EA836:9,ShangJiaShenHeYuan_97A3C1B828317FF0:10,ShangJiaShuJuYinSi_10E727CF6CDB567C:11,XiTongGuanLiYuan_173CD1D08E15F40C:12,name:{GuanLiYuan_D8A4B9DEE8AA8FD8:"GuanLiYuan_D8A4B9DEE8AA8FD8",QuDao_65EB9FED4A82D56C:"QuDao_65EB9FED4A82D56C",ShangJiaCaiWuGuanLiYuan_5AA1F84720F218A2:"ShangJiaCaiWuGuanLiYuan_5AA1F84720F218A2",ShangJiaCaiWu_7C356CE163F72E1B:"ShangJiaCaiWu_7C356CE163F72E1B",ShangJiaDaoLiangGuanLiYuan_2596FECE7F44735C:"ShangJiaDaoLiangGuanLiYuan_2596FECE7F44735C",ShangJiaDuanXinGuanLiYuan_8713ABE50F94937A:"ShangJiaDuanXinGuanLiYuan_8713ABE50F94937A",ShangJiaFenPeiYuan_4C032DECBA57452B:"ShangJiaFenPeiYuan_4C032DECBA57452B",ShangJiaFuZhiGuanLiYuan_6EDE0E5F7C703B95:"ShangJiaFuZhiGuanLiYuan_6EDE0E5F7C703B95",ShangJiaGuanLiYuan_E21083EE2BC55861:"ShangJiaGuanLiYuan_E21083EE2BC55861",ShangJiaKeFu_E235FB546C2EA836:"ShangJiaKeFu_E235FB546C2EA836",ShangJiaShenHeYuan_97A3C1B828317FF0:"ShangJiaShenHeYuan_97A3C1B828317FF0",ShangJiaShuJuYinSi_10E727CF6CDB567C:"ShangJiaShuJuYinSi_10E727CF6CDB567C",XiTongGuanLiYuan_173CD1D08E15F40C:"XiTongGuanLiYuan_173CD1D08E15F40C"},message:{GuanLiYuan_D8A4B9DEE8AA8FD8:"管理员",QuDao_65EB9FED4A82D56C:"渠道",ShangJiaCaiWuGuanLiYuan_5AA1F84720F218A2:"商家财务管理员",ShangJiaCaiWu_7C356CE163F72E1B:"商家财务",ShangJiaDaoLiangGuanLiYuan_2596FECE7F44735C:"商家导量管理员",ShangJiaDuanXinGuanLiYuan_8713ABE50F94937A:"商家短信管理员",ShangJiaFenPeiYuan_4C032DECBA57452B:"商家分配员",ShangJiaFuZhiGuanLiYuan_6EDE0E5F7C703B95:"商家复制管理员",ShangJiaGuanLiYuan_E21083EE2BC55861:"商家管理员",ShangJiaKeFu_E235FB546C2EA836:"商家客服",ShangJiaShenHeYuan_97A3C1B828317FF0:"商家审核员",ShangJiaShuJuYinSi_10E727CF6CDB567C:"商家数据隐私",XiTongGuanLiYuan_173CD1D08E15F40C:"系统管理员"}};var SbyApplyFormFieldStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyApplyFormFieldType={Number:0,Amount:1,Text:2,TextArea:3,IdentityCode:4,Password:5,Radio:10,Checkbox:11,Select:12,Area:13,Calendar:20,Image:21,name:{Number:"Number",Amount:"Amount",Text:"Text",TextArea:"TextArea",IdentityCode:"IdentityCode",Password:"Password",Radio:"Radio",Checkbox:"Checkbox",Select:"Select",Area:"Area",Calendar:"Calendar",Image:"Image"},message:{Number:"数字",Amount:"金额",Text:"字符串",TextArea:"文本",IdentityCode:"身份证号码",Password:"密码",Radio:"单选",Checkbox:"多选",Select:"下拉框",Area:"省市区",Calendar:"日历",Image:"上传图片"}};var SbyBillinfoBillStatus={NoRepayment:0,Repayment:1,Extension:2,PartialRepayment:3,OverdueFeesNoRepayment:4,name:{NoRepayment:"NoRepayment",Repayment:"Repayment",Extension:"Extension",PartialRepayment:"PartialRepayment",OverdueFeesNoRepayment:"OverdueFeesNoRepayment"},message:{NoRepayment:"未还款",Repayment:"已还款",Extension:"已展期",PartialRepayment:"部分还款",OverdueFeesNoRepayment:"逾期费未结清"}};var SbyBillinfoIOUPlatform={YPZ:0,JDB:1,JJD:2,WYJT:3,MF:4,QT:5,name:{YPZ:"YPZ",JDB:"JDB",JJD:"JJD",WYJT:"WYJT",MF:"MF",QT:"QT"},message:{YPZ:"有凭证",JDB:"借贷宝",JJD:"今借到",WYJT:"无忧借条",MF:"米房",QT:"其他"}};var SbyBillinfoStatus={Deleted:-1,Effecting:0,name:{Deleted:"Deleted",Effecting:"Effecting"},message:{Deleted:"已删除",Effecting:"待认证"}};var SbyChannelStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyCustomerApplyFormFillInType={Full:0,Blank:10,Supplement:11,Pending:20,ModifySuccessful:21,name:{Full:"Full",Blank:"Blank",Supplement:"Supplement",Pending:"Pending",ModifySuccessful:"ModifySuccessful"},message:{Full:"全程填写",Blank:"空白填写",Supplement:"补充填写",Pending:"待修改",ModifySuccessful:"修改成功"}};var SbyCustomerApplyFormStatus={Canceled:-1,Pending:0,Auditing:10,ApplySuccessful:11,ApplyFailure:12,SendSMSSuccess:13,SendSMSFailure:14,LimitApply:15,Settle:20,Overdue:21,Lost:22,name:{Canceled:"Canceled",Pending:"Pending",Auditing:"Auditing",ApplySuccessful:"ApplySuccessful",ApplyFailure:"ApplyFailure",SendSMSSuccess:"SendSMSSuccess",SendSMSFailure:"SendSMSFailure",LimitApply:"LimitApply",Settle:"Settle",Overdue:"Overdue",Lost:"Lost"},message:{Canceled:"已取消",Pending:"待审核",Auditing:"审核中",ApplySuccessful:"已放款",ApplyFailure:"拒绝受理",SendSMSSuccess:"审核中(重发短信成功)",SendSMSFailure:"审核中(重发短信失败)",LimitApply:"限制申请",Settle:"已结清",Overdue:"逾期",Lost:"失联"}};var SbyCustomerApplyFormTrackingOrderStatus={Canceled:-1,Pending:0,Auditing:10,ApplySuccessful:11,ApplyFailure:12,SendSMSSuccess:13,SendSMSFailure:14,LimitApply:15,Settle:20,Overdue:21,Lost:22,name:{Canceled:"Canceled",Pending:"Pending",Auditing:"Auditing",ApplySuccessful:"ApplySuccessful",ApplyFailure:"ApplyFailure",SendSMSSuccess:"SendSMSSuccess",SendSMSFailure:"SendSMSFailure",LimitApply:"LimitApply",Settle:"Settle",Overdue:"Overdue",Lost:"Lost"},message:{Canceled:"已取消",Pending:"待审核",Auditing:"审核中",ApplySuccessful:"已放款",ApplyFailure:"拒绝受理",SendSMSSuccess:"审核中(重发短信成功)",SendSMSFailure:"审核中(重发短信失败)",LimitApply:"限制申请",Settle:"已结清",Overdue:"逾期",Lost:"失联"}};var SbyCustomerEducationSituation={MasterDegreeAndAbove:0,Undergraduate:10,JuniorCollege:11,HighSchoolAndAbove:20,PrimarySchool:30,None:100,name:{MasterDegreeAndAbove:"MasterDegreeAndAbove",Undergraduate:"Undergraduate",JuniorCollege:"JuniorCollege",HighSchoolAndAbove:"HighSchoolAndAbove",PrimarySchool:"PrimarySchool",None:"None"},message:{MasterDegreeAndAbove:"硕士及以上",Undergraduate:"本科",JuniorCollege:"大专",HighSchoolAndAbove:"中专",PrimarySchool:"小学",None:"无"}};var SbyCustomerMarriageSituation={UnMarried:0,Married:1,name:{UnMarried:"UnMarried",Married:"Married"},message:{UnMarried:"未婚",Married:"已婚"}};var SbyCustomerReceiptAccountReceiptAccountType={Alipay:0,ABOC:1,BC:2,BHB:3,BJB:4,BOCM:5,BRCB:6,CCB:7,CCIB:8,CDB:9,CEB:10,CIB:11,CMB:12,CMBC:13,CPSB:14,GDB:15,HB:16,HKB:17,HZB:18,ICBC:19,JHB:20,NBB:21,NJB:22,PAB:23,PB:24,QDB:25,SHB:26,SPDB:27,SRCB:28,WZB:29,name:{Alipay:"Alipay",ABOC:"ABOC",BC:"BC",BHB:"BHB",BJB:"BJB",BOCM:"BOCM",BRCB:"BRCB",CCB:"CCB",CCIB:"CCIB",CDB:"CDB",CEB:"CEB",CIB:"CIB",CMB:"CMB",CMBC:"CMBC",CPSB:"CPSB",GDB:"GDB",HB:"HB",HKB:"HKB",HZB:"HZB",ICBC:"ICBC",JHB:"JHB",NBB:"NBB",NJB:"NJB",PAB:"PAB",PB:"PB",QDB:"QDB",SHB:"SHB",SPDB:"SPDB",SRCB:"SRCB",WZB:"WZB"},message:{Alipay:"支付宝",ABOC:"中国农业银行",BC:"中国银行",BHB:"渤海银行",BJB:"北京银行",BOCM:"交通银行",BRCB:"北京农商银行",CCB:"中国建设银行",CCIB:"中信银行",CDB:"成都银行",CEB:"中国光大银行",CIB:"兴业银行",CMB:"招商银行",CMBC:"中国民生银行",CPSB:"中国邮政储蓄银行",GDB:"广发银行",HB:"华夏银行",HKB:"汉口银行",HZB:"杭州银行",ICBC:"中国工商银行",JHB:"金华银行",NBB:"宁波银行",NJB:"南京银行",PAB:"平安银行",PB:"恒丰银行",QDB:"青岛银行",SHB:"上海银行",SPDB:"上海浦东发展银行",SRCB:"上海农村商业银行",WZB:"温州银行"}};var SbyCustomerReceiptAccountStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyCustomerTianJiStatus={InitSuccessful:0,LoginSuccessful:10,LoginFailure:11,CrawlSuccessful:20,CrawlFailure:21,ReportSuccessful:30,ReportFailure:31,name:{InitSuccessful:"InitSuccessful",LoginSuccessful:"LoginSuccessful",LoginFailure:"LoginFailure",CrawlSuccessful:"CrawlSuccessful",CrawlFailure:"CrawlFailure",ReportSuccessful:"ReportSuccessful",ReportFailure:"ReportFailure"},message:{InitSuccessful:"初始化",LoginSuccessful:"登录成功",LoginFailure:"登录失败",CrawlSuccessful:"抓取报告成功",CrawlFailure:"抓取报告失败",ReportSuccessful:"生成报告成功",ReportFailure:"生成报告失败"}};var SbyLoginRecordStatus={Invalid:0,Effective:1,name:{Invalid:"Invalid",Effective:"Effective"},message:{Invalid:"失效",Effective:"已启用"}};var SbyMerchantApplyFormStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyMerchantCertificationStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyMerchantEmployeeStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyMerchantIncomingType={Apply:0,Register:1,name:{Apply:"Apply",Register:"Register"},message:{Apply:"申请",Register:"注册"}};var SbyMerchantLenderStatus={Disabled:-1,Pending:0,CertificationSuccess:10,name:{Disabled:"Disabled",Pending:"Pending",CertificationSuccess:"CertificationSuccess"},message:{Disabled:"已禁用",Pending:"待认证",CertificationSuccess:"认证成功"}};var SbyMerchantSettingJumpType={NotJump:0,ManualJump:1,AutomaticJump:2,name:{NotJump:"NotJump",ManualJump:"ManualJump",AutomaticJump:"AutomaticJump"},message:{NotJump:"不跳转",ManualJump:"手动跳转",AutomaticJump:"自动跳转"}};var SbyMerchantSettingStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyMerchantSmsLogStatus={SendSuccessful:0,SendFailure:1,name:{SendSuccessful:"SendSuccessful",SendFailure:"SendFailure"},message:{SendSuccessful:"短信发送成功",SendFailure:"短信发送失败"}};var SbyMerchantStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SbyMerchantZhimaLogStatus={RequestSuccessful:0,RequestFailure:1,name:{RequestSuccessful:"RequestSuccessful",RequestFailure:"RequestFailure"},message:{RequestSuccessful:"请求成功",RequestFailure:"请求失败"}};var ServiceCode={JieDaiZhuanJia:0,YMZiDongDaoLiang:1,name:{JieDaiZhuanJia:"JieDaiZhuanJia",YMZiDongDaoLiang:"YMZiDongDaoLiang"},message:{JieDaiZhuanJia:"借贷专家",YMZiDongDaoLiang:"有脉自动导量"}};var SocialSecuritySituation={NotPurchased:0,AlreadyPurchased:1,name:{NotPurchased:"NotPurchased",AlreadyPurchased:"AlreadyPurchased"},message:{NotPurchased:"未购买",AlreadyPurchased:"已购买"}};var StatisticsEnum={SUM:0,COUNT:1,AVG:2,MAX:3,MIN:4,name:{SUM:"SUM",COUNT:"COUNT",AVG:"AVG",MAX:"MAX",MIN:"MIN"},message:{SUM:"SUM",COUNT:"COUNT",AVG:"AVG",MAX:"MAX",MIN:"MIN"}};var SysAttachmentType={File:0,Image:10,Audio:20,Video:30,name:{File:"File",Image:"Image",Audio:"Audio",Video:"Video"},message:{File:"文件",Image:"图片",Audio:"音频",Video:"视频"}};var SysCountryContinentCode={AS:0,EU:1,AM:2,OA:3,AF:4,OT:5,name:{AS:"AS",EU:"EU",AM:"AM",OA:"OA",AF:"AF",OT:"OT"},message:{AS:"亚洲",EU:"欧洲",AM:"美洲",OA:"大洋洲",AF:"非洲",OT:"其他"}};var SysNotificationKind={Content:0,ExternalUrl:1,name:{Content:"Content",ExternalUrl:"ExternalUrl"},message:{Content:"内容通知",ExternalUrl:"外部链接通知"}};var SysNotificationStatus={Deleted:-1,Pending:0,Published:1,name:{Deleted:"Deleted",Pending:"Pending",Published:"Published"},message:{Deleted:"已删除",Pending:"草稿",Published:"已发布"}};var SysPrivilegeStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SysPushNotificationStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SysRoleStatus={Disabled:-1,Enabled:1,name:{Disabled:"Disabled",Enabled:"Enabled"},message:{Disabled:"已禁用",Enabled:"已启用"}};var SystemName={Web:0,Task:1,name:{Web:"Web",Task:"Task"},message:{Web:"Web系统",Task:"任务系统"}};var SysUserLoginTrackingTerminalType={PC:0,Mobile:1,name:{PC:"PC",Mobile:"Mobile"},message:{PC:"PC端",Mobile:"手机端"}};var SysUserSex={Unknown:0,Male:1,Female:2,name:{Unknown:"Unknown",Male:"Male",Female:"Female"},message:{Unknown:"未知",Male:"男",Female:"女"}};var SysUserStatus={Disabled:-1,Inactived:0,Enabled:1,name:{Disabled:"Disabled",Inactived:"Inactived",Enabled:"Enabled"},message:{Disabled:"已禁用",Inactived:"未激活",Enabled:"已启用"}};var SysUserType={SystemUser:0,MerchantUser:1,ChannelUser:2,name:{SystemUser:"SystemUser",MerchantUser:"MerchantUser",ChannelUser:"ChannelUser"},message:{SystemUser:"系统用户",MerchantUser:"商家用户",ChannelUser:"渠道用户"}};var TianJiCallEmergency={Yes:0,No:1,Unknown:2,name:{Yes:"Yes",No:"No",Unknown:"Unknown"},message:{Yes:"是",No:"否",Unknown:"未知"}};var TianJiCrawlMultiLoanReport={Not:0,LessOr3:1,LessOr5:2,LessOr15:3,MoreOr15:4,name:{Not:"Not",LessOr3:"LessOr3",LessOr5:"LessOr5",LessOr15:"LessOr15",MoreOr15:"MoreOr15"},message:{Not:"无",LessOr3:"1到3次",LessOr5:"3到5次",LessOr15:"5到15次",MoreOr15:"15次以上"}};var TianJiInsureOrFundType={Pension:1,Unemployment:2,WorkInjury:3,Fertility:4,MedicalCare:5,Fund:6,CriticalCare:7,name:{Pension:"Pension",Unemployment:"Unemployment",WorkInjury:"WorkInjury",Fertility:"Fertility",MedicalCare:"MedicalCare",Fund:"Fund",CriticalCare:"CriticalCare"},message:{Pension:"养老险",Unemployment:"失业险",WorkInjury:"工伤险",Fertility:"生育险",MedicalCare:"医疗险",Fund:"公积金",CriticalCare:"大病医疗"}};var TianJiInternetCertificationStatus={InitSuccessful:0,LoginSuccessful:10,LoginFailure:11,CrawlSuccessful:20,CrawlFailure:21,ReportSuccessful:30,ReportFailure:31,name:{InitSuccessful:"InitSuccessful",LoginSuccessful:"LoginSuccessful",LoginFailure:"LoginFailure",CrawlSuccessful:"CrawlSuccessful",CrawlFailure:"CrawlFailure",ReportSuccessful:"ReportSuccessful",ReportFailure:"ReportFailure"},message:{InitSuccessful:"初始化",LoginSuccessful:"登录成功",LoginFailure:"登录失败",CrawlSuccessful:"抓取报告成功",CrawlFailure:"抓取报告失败",ReportSuccessful:"生成报告成功",ReportFailure:"生成报告失败"}};var TianJiMethod={InternetCertificationURL:0,OperatorReport:1,OperatorReportV2:2,BaiDuBlacklist:3,AgentPBlacklist:4,YiMeiBlacklist:5,JingDongReport:6,FundReport:7,InsureReport:8,EmailReport:9,ChsiReport:10,AlipayReport:11,AgentRBlacklist:12,UserPortrait:13,CrawlMultiLoanReport:14,IDCardIdentification:15,name:{InternetCertificationURL:"InternetCertificationURL",OperatorReport:"OperatorReport",OperatorReportV2:"OperatorReportV2",BaiDuBlacklist:"BaiDuBlacklist",AgentPBlacklist:"AgentPBlacklist",YiMeiBlacklist:"YiMeiBlacklist",JingDongReport:"JingDongReport",FundReport:"FundReport",InsureReport:"InsureReport",EmailReport:"EmailReport",ChsiReport:"ChsiReport",AlipayReport:"AlipayReport",AgentRBlacklist:"AgentRBlacklist",UserPortrait:"UserPortrait",CrawlMultiLoanReport:"CrawlMultiLoanReport",IDCardIdentification:"IDCardIdentification"},message:{InternetCertificationURL:"tianji.api.tianjireport.collectuser",OperatorReport:"tianji.api.tianjireport.detail",OperatorReportV2:"wd.api.mobilephone.getdatav2",BaiDuBlacklist:"tianji.api.baidu.blacklist",AgentPBlacklist:"tianji.api.agentp.blacklist",YiMeiBlacklist:"tianji.api.yimei.blacklist",JingDongReport:"wd.api.jd.getData",FundReport:"wd.api.fund.getData",InsureReport:"wd.api.insure.getData",EmailReport:"wd.api.email.getData",ChsiReport:"wd.api.chsi.getData",AlipayReport:"wd.api.alipay.getData",AgentRBlacklist:"tianji.api.agentr.blacklist",UserPortrait:"tianji.api.userportrait.crawlmodel",CrawlMultiLoanReport:"tianji.api.tianjireport.crawlmultiloanreport",IDCardIdentification:"tianji.api.faceplus.idcardocr"}};var TianJiNameOrIdCard={CompleteConsistent:1,BasicConsistent:2,NotConsistent:3,Unknown:4,UnknownUserInfo:5,name:{CompleteConsistent:"CompleteConsistent",BasicConsistent:"BasicConsistent",NotConsistent:"NotConsistent",Unknown:"Unknown",UnknownUserInfo:"UnknownUserInfo"},message:{CompleteConsistent:"完全一致",BasicConsistent:"基本一致",NotConsistent:"不一致",Unknown:"无法验证",UnknownUserInfo:"无法验证"}};var TianJiOperatorV2CallType={Call:1,Called:2,Unknown:3,name:{Call:"Call",Called:"Called",Unknown:"Unknown"},message:{Call:"主叫",Called:"被叫",Unknown:"未识别状态"}};var TianJiOperatorV2MessageStatus={Send:1,Receive:2,Unknown:3,name:{Send:"Send",Receive:"Receive",Unknown:"Unknown"},message:{Send:"发送",Receive:"接收",Unknown:"未知状态"}};var TianJiOperatorV2MessageType={SMS:0,MMS:1,Other:2,name:{SMS:"SMS",MMS:"MMS",Other:"Other"},message:{SMS:"短信",MMS:"彩信",Other:"其他"}};var TianJiOperatorV2PhoneStatus={Unknown:0,Normal:1,Stop:2,UnidirectionalStop:3,PreSales:4,Sales:5,Transfer:6,ChangeNumber:7,NotExist:8,Freeze:9,name:{Unknown:"Unknown",Normal:"Normal",Stop:"Stop",UnidirectionalStop:"UnidirectionalStop",PreSales:"PreSales",Sales:"Sales",Transfer:"Transfer",ChangeNumber:"ChangeNumber",NotExist:"NotExist",Freeze:"Freeze"},message:{Unknown:"未知",Normal:"正常",Stop:"停机",UnidirectionalStop:"单向停机",PreSales:"预销户",Sales:"销户",Transfer:"过户",ChangeNumber:"改号",NotExist:"此号码不存在",Freeze:"冻结"}};var TianJiUserType={Yes:1,No:2,Unknown:20,name:{Yes:"Yes",No:"No",Unknown:"Unknown"},message:{Yes:"实名认证",No:"非实名认证",Unknown:"未知"}};var UserCertificationCode={JieDaiBaoHomepage:0,JieDaiBaoRepayment:1,JieDaiBaoCapitalDynamics:2,AliPayHomepage:3,AliPayNegativeRecord:4,TaoBaoShippingAddress:5,FathersName:6,FathersPhoneNumber:7,MothersName:8,MothersPhoneNumber:9,SpousesName:10,SpousesPhoneNumber:11,ColleagueName:12,ColleaguePhoneNumber:13,JinJieDaoHomepage:14,JinJieDaoLiabilities:15,JingDongCertification:16,InsureCertification:17,FundCertification:18,ChsiCertification:19,EmailCertification:20,OperatorCertification:21,YMTaoBaoCertification:22,TJAlipayCertification:23,UserPortraitCertification:24,CrawlMultiLoanReport:25,JXLOperatorCertification:26,JXLJingDongCertification:27,JXLInsureCertification:28,JXLFundCertification:29,TDOperatorCertification:30,TDReportCertification:31,TDInsureCertification:32,TDFundCertification:33,name:{JieDaiBaoHomepage:"JieDaiBaoHomepage",JieDaiBaoRepayment:"JieDaiBaoRepayment",JieDaiBaoCapitalDynamics:"JieDaiBaoCapitalDynamics",AliPayHomepage:"AliPayHomepage",AliPayNegativeRecord:"AliPayNegativeRecord",TaoBaoShippingAddress:"TaoBaoShippingAddress",FathersName:"FathersName",FathersPhoneNumber:"FathersPhoneNumber",MothersName:"MothersName",MothersPhoneNumber:"MothersPhoneNumber",SpousesName:"SpousesName",SpousesPhoneNumber:"SpousesPhoneNumber",ColleagueName:"ColleagueName",ColleaguePhoneNumber:"ColleaguePhoneNumber",JinJieDaoHomepage:"JinJieDaoHomepage",JinJieDaoLiabilities:"JinJieDaoLiabilities",JingDongCertification:"JingDongCertification",InsureCertification:"InsureCertification",FundCertification:"FundCertification",ChsiCertification:"ChsiCertification",EmailCertification:"EmailCertification",OperatorCertification:"OperatorCertification",YMTaoBaoCertification:"YMTaoBaoCertification",TJAlipayCertification:"TJAlipayCertification",UserPortraitCertification:"UserPortraitCertification",CrawlMultiLoanReport:"CrawlMultiLoanReport",JXLOperatorCertification:"JXLOperatorCertification",JXLJingDongCertification:"JXLJingDongCertification",JXLInsureCertification:"JXLInsureCertification",JXLFundCertification:"JXLFundCertification",TDOperatorCertification:"TDOperatorCertification",TDReportCertification:"TDReportCertification",TDInsureCertification:"TDInsureCertification",TDFundCertification:"TDFundCertification"},message:{JieDaiBaoHomepage:"借贷宝个人主页",JieDaiBaoRepayment:"借贷宝收还款",JieDaiBaoCapitalDynamics:"借贷宝资金动态",AliPayHomepage:"支付宝个人主页",AliPayNegativeRecord:"支付宝负面记录",TaoBaoShippingAddress:"淘宝收货地址",FathersName:"父亲姓名",FathersPhoneNumber:"父亲电话号码",MothersName:"母亲姓名",MothersPhoneNumber:"母亲电话号码",SpousesName:"配偶姓名",SpousesPhoneNumber:"配偶电话号码",ColleagueName:"同事姓名",ColleaguePhoneNumber:"同事电话号码",JinJieDaoHomepage:"今借到首页",JinJieDaoLiabilities:"今借到负债",JingDongCertification:"京东认证",InsureCertification:"社保认证",FundCertification:"公积金认证",ChsiCertification:"学信网认证",EmailCertification:"邮箱认证",OperatorCertification:"运营商认证",YMTaoBaoCertification:"有脉淘宝认证",TJAlipayCertification:"支付宝",UserPortraitCertification:"用户画像2.2",CrawlMultiLoanReport:"多头报告",JXLOperatorCertification:"J运营商认证",JXLJingDongCertification:"J京东认证",JXLInsureCertification:"J社保认证",JXLFundCertification:"J公积金认证",TDOperatorCertification:"T运营商认证",TDReportCertification:"T同盾报告",TDInsureCertification:"T社保认证",TDFundCertification:"T公积金认证"}};var VehicleSituation={None:0,ReadyToBuy:1,UnderTheName:2,name:{None:"None",ReadyToBuy:"ReadyToBuy",UnderTheName:"UnderTheName"},message:{None:"无车",ReadyToBuy:"准备购买",UnderTheName:"名下有车"}};var WagePaymentMethod={BankTransfer:1,Other:10,name:{BankTransfer:"BankTransfer",Other:"Other"},message:{BankTransfer:"银行汇款",Other:"其他"}};var YouMaiIOUListSorted={RepaymentDateAES:0,RepaymentDateDESC:1,AmountAES:2,AmountDESC:3,name:{RepaymentDateAES:"RepaymentDateAES",RepaymentDateDESC:"RepaymentDateDESC",AmountAES:"AmountAES",AmountDESC:"AmountDESC"},message:{RepaymentDateAES:"还款日期从早到晚",RepaymentDateDESC:"还款日期从晚到早",AmountAES:"借款金额从小到大",AmountDESC:"借款金额从大到小"}};var YouMaiLoanAnnualInterestRate={Zero:0,One:1,Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Eleven:11,Twelve:12,Thirteen:13,Fourteen:14,Fifteen:15,Sixteen:16,Seventeen:17,Eighteen:18,Nineteen:19,Twenty:20,TwentyOne:21,TwentyTwo:22,TwentyThree:23,TwentyFour:24,name:{Zero:"Zero",One:"One",Two:"Two",Three:"Three",Four:"Four",Five:"Five",Six:"Six",Seven:"Seven",Eight:"Eight",Nine:"Nine",Ten:"Ten",Eleven:"Eleven",Twelve:"Twelve",Thirteen:"Thirteen",Fourteen:"Fourteen",Fifteen:"Fifteen",Sixteen:"Sixteen",Seventeen:"Seventeen",Eighteen:"Eighteen",Nineteen:"Nineteen",Twenty:"Twenty",TwentyOne:"TwentyOne",TwentyTwo:"TwentyTwo",TwentyThree:"TwentyThree",TwentyFour:"TwentyFour"},message:{Zero:"0%",One:"1%",Two:"2%",Three:"3%",Four:"4%",Five:"5%",Six:"6%",Seven:"7%",Eight:"8%",Nine:"9%",Ten:"10%",Eleven:"11%",Twelve:"12%",Thirteen:"13%",Fourteen:"14%",Fifteen:"15%",Sixteen:"16%",Seventeen:"17%",Eighteen:"18%",Nineteen:"19%",Twenty:"20%",TwentyOne:"21%",TwentyTwo:"22%",TwentyThree:"23%",TwentyFour:"24%"}};var YouMaiLoanIouStatus={Invalid:-20,Rejected:-10,Deleted:-1,Pending:0,Effecting:10,Frozen:11,Destroyed:20,name:{Invalid:"Invalid",Rejected:"Rejected",Deleted:"Deleted",Pending:"Pending",Effecting:"Effecting",Frozen:"Frozen",Destroyed:"Destroyed"},message:{Invalid:"无效的",Rejected:"已拒绝",Deleted:"已删除",Pending:"待确认",Effecting:"已生效",Frozen:"已冻结",Destroyed:"已撕毁"}};var YouMaiLoanUse={Turnover:0,Consumption:1,MedicalCare:2,Rental:3,Tourism:4,BuyCellPhone:5,Entrepreneurship:6,Decoration:7,name:{Turnover:"Turnover",Consumption:"Consumption",MedicalCare:"MedicalCare",Rental:"Rental",Tourism:"Tourism",BuyCellPhone:"BuyCellPhone",Entrepreneurship:"Entrepreneurship",Decoration:"Decoration"},message:{Turnover:"周转",Consumption:"消费",MedicalCare:"医疗",Rental:"租房",Tourism:"旅游",BuyCellPhone:"买手机",Entrepreneurship:"创业",Decoration:"装修"}};var YunTongXunTemplateCode={CertificationPone:0,NewApplyForm:1,name:{CertificationPone:"CertificationPone",NewApplyForm:"NewApplyForm"},message:{CertificationPone:"认证手机验证码",NewApplyForm:"新订单通知"}};var ZhiMaCreditantifraudverifyCode={V_CN_NA:0,V_CN_NM_UM:1,V_CN_NM_MA:2,V_PH_NA:3,V_PH_CN_UM:4,V_PH_CN_MA_UL30D:5,V_PH_CN_MA_UL90D:6,V_PH_CN_MA_UL180D:7,V_PH_CN_MA_UM180D:8,V_PH_NM_UM:9,V_PH_NM_MA_UL30D:10,V_PH_NM_MA_UL90D:11,V_PH_NM_MA_UL180D:12,V_PH_NM_MA_UM180D:13,name:{V_CN_NA:"V_CN_NA",V_CN_NM_UM:"V_CN_NM_UM",V_CN_NM_MA:"V_CN_NM_MA",V_PH_NA:"V_PH_NA",V_PH_CN_UM:"V_PH_CN_UM",V_PH_CN_MA_UL30D:"V_PH_CN_MA_UL30D",V_PH_CN_MA_UL90D:"V_PH_CN_MA_UL90D",V_PH_CN_MA_UL180D:"V_PH_CN_MA_UL180D",V_PH_CN_MA_UM180D:"V_PH_CN_MA_UM180D",V_PH_NM_UM:"V_PH_NM_UM",V_PH_NM_MA_UL30D:"V_PH_NM_MA_UL30D",V_PH_NM_MA_UL90D:"V_PH_NM_MA_UL90D",V_PH_NM_MA_UL180D:"V_PH_NM_MA_UL180D",V_PH_NM_MA_UM180D:"V_PH_NM_MA_UM180D"},message:{V_CN_NA:"查询不到身份证信息",V_CN_NM_UM:"姓名与身份证号不匹配",V_CN_NM_MA:"姓名与身份证号匹配",V_PH_NA:"查询不到电话号码信息",V_PH_CN_UM:"电话号码与本人不匹配",V_PH_CN_MA_UL30D:"电话号码与本人匹配，30天内有使用",V_PH_CN_MA_UL90D:"电话号码与本人匹配，90天内有使用",V_PH_CN_MA_UL180D:"电话号码与本人匹配，180天内有使用",V_PH_CN_MA_UM180D:"电话号码与本人匹配，180天内没有使用",V_PH_NM_UM:"电话号码与姓名不匹配",V_PH_NM_MA_UL30D:"电话号码与姓名匹配，30天内有使用",V_PH_NM_MA_UL90D:"电话号码与姓名匹配，90天内有使用",V_PH_NM_MA_UL180D:"电话号码与姓名匹配，180天内有使用",V_PH_NM_MA_UM180D:"电话号码与姓名匹配，180天内没有使用"}};var ZhiMaCreditWatchlistiiCode={AA001001:0,AA001002:1,AA001003:2,AA001004:3,AA001005:4,AA001006:5,AA001007:6,AA001010:7,AA001011:8,AA001012:9,AA001013:10,AA001014:11,AA001015:12,AA001016:13,AA002001:14,AB001001:15,AB001002:16,AC001001:17,AC002001:18,AC003001:19,AC004001:20,AC005001:21,AC007001:22,AD001001:23,AD001002:24,AD001003:25,AD001004:26,AD001005:27,AD001006:28,AD001007:29,AD001008:30,AD001009:31,AD002001:32,AD002002:33,AD002003:34,AD002004:35,AD002005:36,AD002006:37,AD002007:38,AD002008:39,AD002009:40,AD003001:41,AD003002:42,AD003003:43,AD003004:44,AD003005:45,AD003006:46,AD003007:47,AD003008:48,AD003009:49,AE001001:50,AE001002:51,AE001003:52,AE001004:53,AE001005:54,AE001006:55,AE001007:56,AE001008:57,AE001009:58,AF001001:59,AF002001:60,AF003001:61,AF004001:62,AG001001:63,AG002001:64,AG003001:65,AG004001:66,AG004002:67,AG004003:68,AG004004:69,AG004005:70,AG005001:71,AG005002:72,AH001001:73,AH001002:74,AH001003:75,AH001004:76,AI003001:77,AI003002:78,AI003003:79,AI003004:80,AI003005:81,AI003006:82,AI003007:83,name:{AA001001:"AA001001",AA001002:"AA001002",AA001003:"AA001003",AA001004:"AA001004",AA001005:"AA001005",AA001006:"AA001006",AA001007:"AA001007",AA001010:"AA001010",AA001011:"AA001011",AA001012:"AA001012",AA001013:"AA001013",AA001014:"AA001014",AA001015:"AA001015",AA001016:"AA001016",AA002001:"AA002001",AB001001:"AB001001",AB001002:"AB001002",AC001001:"AC001001",AC002001:"AC002001",AC003001:"AC003001",AC004001:"AC004001",AC005001:"AC005001",AC007001:"AC007001",AD001001:"AD001001",AD001002:"AD001002",AD001003:"AD001003",AD001004:"AD001004",AD001005:"AD001005",AD001006:"AD001006",AD001007:"AD001007",AD001008:"AD001008",AD001009:"AD001009",AD002001:"AD002001",AD002002:"AD002002",AD002003:"AD002003",AD002004:"AD002004",AD002005:"AD002005",AD002006:"AD002006",AD002007:"AD002007",AD002008:"AD002008",AD002009:"AD002009",AD003001:"AD003001",AD003002:"AD003002",AD003003:"AD003003",AD003004:"AD003004",AD003005:"AD003005",AD003006:"AD003006",AD003007:"AD003007",AD003008:"AD003008",AD003009:"AD003009",AE001001:"AE001001",AE001002:"AE001002",AE001003:"AE001003",AE001004:"AE001004",AE001005:"AE001005",AE001006:"AE001006",AE001007:"AE001007",AE001008:"AE001008",AE001009:"AE001009",AF001001:"AF001001",AF002001:"AF002001",AF003001:"AF003001",AF004001:"AF004001",AG001001:"AG001001",AG002001:"AG002001",AG003001:"AG003001",AG004001:"AG004001",AG004002:"AG004002",AG004003:"AG004003",AG004004:"AG004004",AG004005:"AG004005",AG005001:"AG005001",AG005002:"AG005002",AH001001:"AH001001",AH001002:"AH001002",AH001003:"AH001003",AH001004:"AH001004",AI003001:"AI003001",AI003002:"AI003002",AI003003:"AI003003",AI003004:"AI003004",AI003005:"AI003005",AI003006:"AI003006",AI003007:"AI003007"},message:{AA001001:"借贷逾期1-30天",AA001002:"借贷逾期31-60天",AA001003:"借贷逾期61-90天",AA001004:"借贷逾期91-120天",AA001005:"借贷逾期121-150天",AA001006:"借贷逾期151-180天",AA001007:"借贷逾期180天以上",AA001010:"借贷逾期1期",AA001011:"借贷逾期2期",AA001012:"借贷逾期3期",AA001013:"借贷逾期4期",AA001014:"借贷逾期5期",AA001015:"借贷逾期6期",AA001016:"借贷逾期6期以上",AA002001:"套现严重逾期且套现",AB001001:"失信被执行人",AB001002:"被执行人",AC001001:"盗卡者/盗卡者同伙",AC002001:"欺诈者/欺诈同伙",AC003001:"盗用操作/盗用者同伙",AC004001:"盗用支出/盗用者同伙",AC005001:"欺骗赔偿者",AC007001:"营销作弊名单",AD001001:"租车逾期未支付1-7天",AD001002:"租车逾期未支付8-14天",AD001003:"租车逾期未支付15-30天",AD001004:"租车逾期未支付31-60天",AD001005:"租车逾期未支付61-90天",AD001006:"租车逾期未支付91-120天",AD001007:"租车逾期未支付121-150天",AD001008:"租车逾期未支付151-180天",AD001009:"租车逾期未支付180天以上",AD002001:"租车超期未还车1-7天",AD002002:"租车超期未还车8-14天",AD002003:"租车超期未还车15-30天",AD002004:"租车超期未还车31-60天",AD002005:"租车超期未还车61-90天",AD002006:"租车超期未还车91-120天",AD002007:"租车超期未还车121-150天",AD002008:"租车超期未还车151-180天",AD002009:"租车超期未还车180天以上",AD003001:"租车违章未处理1-7天",AD003002:"租车违章未处理8-14天",AD003003:"租车违章未处理15-30天",AD003004:"租车违章未处理31-60天",AD003005:"租车违章未处理61-90天",AD003006:"租车违章未处理91-120天",AD003007:"租车违章未处理121-150天",AD003008:"租车违章未处理151-180天",AD003009:"租车违章未处理180天以上",AE001001:"酒店逾期未支付1-7天",AE001002:"酒店逾期未支付8-14天",AE001003:"酒店逾期未支付15-30天",AE001004:"酒店逾期未支付31-60天",AE001005:"酒店逾期未支付61-90天",AE001006:"酒店逾期未支付91-120天",AE001007:"酒店逾期未支付121-150天",AE001008:"酒店逾期未支付151-180天",AE001009:"酒店逾期未支付180天以上",AF001001:"虚假交易",AF002001:"恶意差评",AF003001:"涉嫌售假",AF004001:"卖家套现",AG001001:"租客房租逾期",AG002001:"租客杂费逾期",AG003001:"租客违约拒赔",AG004001:"租客改变房屋用途",AG004002:"租客拆改房屋结构",AG004003:"租客屋内非法活动",AG004004:"租客扰民被投诉",AG004005:"租客擅自转租",AG005001:"租客违约被清退 因违约行为",AG005002:"租客失联被强制解约",AH001001:"运营商违约欠费1-30天",AH001002:"运营商违约欠费31-60天",AH001003:"运营商违约欠费61-90天",AH001004:"运营商违约欠费91天以上",AI003001:"保险出险逾期1-30天",AI003002:"保险出险逾期31-60天",AI003003:"保险出险逾期61-90天",AI003004:"保险出险逾期91-120天",AI003005:"保险出险逾期121-150天",AI003006:"保险出险逾期151-180天",AI003007:"保险出险逾期180天以上"}};var ZhiMaOverdueAmountCode={M01:0,M02:1,M03:2,M04:3,M05:4,M06:5,M07:6,M08:7,M09:8,M10:9,M11:10,M12:11,M13:12,M14:13,name:{M01:"M01",M02:"M02",M03:"M03",M04:"M04",M05:"M05",M06:"M06",M07:"M07",M08:"M08",M09:"M09",M10:"M10",M11:"M11",M12:"M12",M13:"M13",M14:"M14"},message:{M01:"500元以内",M02:"500至1000元之间",M03:"1000至2000元之间",M04:"2000至3000元之间",M05:"3000至4000元之间",M06:"4000至6000元之间",M07:"6000至8000元之间",M08:"8000至10000元之间",M09:"10000至15000元之间",M10:"15000至20000元之间",M11:"20000至25000元之间",M12:"25000至30000元之间",M13:"30000至40000元之间",M14:"40000以上"}};var ZhongZhiChengLoanType={CashLoan:1,Microfinance:2,P2P:3,CarLoan:4,Mortgage:5,name:{CashLoan:"CashLoan",Microfinance:"Microfinance",P2P:"P2P",CarLoan:"CarLoan",Mortgage:"Mortgage"},message:{CashLoan:"现金贷",Microfinance:"Microfinance",P2P:"P2P",CarLoan:"CarLoan",Mortgage:"Mortgage"}};