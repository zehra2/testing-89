<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<base href="https://serverwala.cloud/"/>
<title> Server Wala Cloud Data Centers Pvt. Ltd.</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link href="https://fonts.googleapis.com/css?family=Nunito|Open+Sans&display=swap&subset=latin-ext"
rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/fonts/iconic/css/material-design-iconic-font.min.css">
<link rel="stylesheet" type="text/css" href="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/css/jquery.pnotify.default.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/css/slick_lf.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/css/2019.css" media="screen"/>
<script type="text/javascript" src="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/js/jquery.pnotify.min.js"></script>
<script type="text/javascript" src="https://serverwala.cloud/includes/modules/Other/cloudsignup/template/js/2019.js"></script>
<script type="text/javascript">
        var infos = [];
        var errors = [];
        
        $(document).ready(function () {
            setTimeout(function () {
                $.each(infos, function (index, item) {
                    $.pnotify({
                        text: item,
                        type: 'info',
                        history: false,
                        buttons: {
                            sticker: false
                        },
                        hide: false,
                        sticker: false,
                        icon: false
                    });
                });
                $.each(errors, function (index, item) {
                    $.pnotify({
                        text: item,
                        type: 'error',
                        history: false,
                        buttons: {
                            sticker: false
                        }
                    });
                });
            }, 300);
        });
        
    </script>
<meta name="csrf-token" content="1156c648a61d6c19de73c2f442340c2a"/>
<script type="text/javascript" src="includes/modules/Other/state_province_select/script.js?v=4ee04b4782ea429385debb7fc40720ae"></script>
<script>
	 $(function () { 
	     $.fn.stateProvinceSelect.states = {"IE":["Antrim","Armagh","Carlow","Cavan","Clare","Cork","Derry","Donegal","Down","Dublin","Fermanagh","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Tyrone","Waterford","Westmeath","Wexford","Wicklow"],"AU":["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South Australia","Tasmania","Victoria","Western Australia"],"CA":["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory"],"FR":["Alsace","Aquitaine","Auvergne","Basse-Normandie","Bourgogne","Bretagne","Centre","Champagne-Ardenne","Corse","Franche-Comte","Haute-Normandie","Ile-de-France","Languedoc-Roussillon","Limousin","Lorraine","Midi-Pyrenees","Nord-Pas-de-Calais","Pays de la Loire","Picardie","Poitou-Charentes","Provence-Alpes-Cote d'Azur","Rhone-Alpes"],"DE":["Baden-Wuerttemberg","Bayern","Berlin","Brandenburg","Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern","Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz","Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein","Thueringen"],"IL":["Central","Haifa","Jerusalem","Northern","Southern","Tel Aviv"],"NL":["Drenthe","Flevoland","Friesland","Gelderland","Groningen","Limburg","Noord-Brabant","Noord-Holland","Overijssel","Utrecht","Zeeland","Zuid-Holland"],"GB":["Aberdeenshire","Angus","Argyll","Ayrshire","Banffshire","Bedfordshire","Berkshire","Berwickshire","Borders","Bristol","Buckinghamshire","Buteshire","Caithness","Cambridgeshire","Central","Cheshire","Clackmannanshire ","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Dumfriesshire","Dunbartonshire","Durham","Dyfed","East Lothian","East Riding of Yorkshire","East Sussex","Edinburgh","Essex","Fife","Fife","Gloucestershire","Grampian","Greater London","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Inverness-shire","Isle of White","Kent","Kincardineshire","Kinross-shire","Kirkcudbrightshire","Lanarkshire","Lancashire","Leicestershire","Lincolnshire","Lothian","Mersyside","Mid Glamorgan","Midlothian","Moray","Nairnshire","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Orkney","Oxfordshire","Peebleshire","Perthshire","Powys","Renfrewshire","Ross and Cromarty","Roxburghshire","Rutland","Selkirkshire","Shetland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Stirlingshire","Strathclyde","Suffolk","Surrey","Sutherland","Tayside","Tyne and Wear","Warwickshire","West Glamorgan","West Lothian","West Midlands","West Sussex","West Yorkshire","Wigtownshire","Wiltshire","Worcestershire"],"US":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],"ES":["A Coru\u00f1a","\u00c1lava","Albacete","Alicante","Almer\u00eda","Asturias","\u00c1vila","Badajoz","Barcelona","Burgos","C\u00e1ceres","C\u00e1diz","Cantabria","Castell\u00f3n","Ceuta","Ciudad Real","C\u00f3rdoba","Cuenca","Girona","Granada","Guadalajara","Guip\u00fazcoa","Huelva","Huesca","Islas Baleares","Ja\u00e9n","Le\u00f3n","Lleida","Lugo","Madrid","M\u00e1laga","Melilla","Murcia","Navarra","Ourense","Palencia","Las Palmas","Pontevedra","La Rioja","Salamanca","Segovia","Sevilla","Soria","Tarragona","Santa Cruz de Tenerife","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"],"BR":["Acre","Alagoas","Amap\u00e1","Amazonas","Bahia","Cear\u00e1","Distrito Federal","Goi\u00e1s","Esp\u00edrito Santo","Maranh\u00e3o","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Par\u00e1","Para\u00edba","Paran\u00e1","Pernambuco","Piau\u00ed","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rond\u00f4nia","Roraima","S\u00e3o Paulo","Santa Catarina","Sergipe","Tocantins"],"IN":["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","National Capital Territory of Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],"BE":["Antwerpen","Limburg","Oost-Vlaanderen","Vlaams-Brabant","West-Vlaanderen","Waals-Brabant","Henegouwen","Luik","Luxemburg","Namen"],"PL":["Dolno\u015bl\u0105skie","Kujawsko-Pomorskie","Lubelskie","Lubuskie","\u0141\u00f3dzkie","Ma\u0142opolskie","Mazowieckie","Opolskie","Podkarpackie","Podlaskie","Pomorskie","\u015al\u0105skie","\u015awi\u0119tokrzyskie","Warmi\u0144sko-mazurskie","Wielkopolskie","Zachodniopomorskie"],"CN":{"Beijing":"Beijing - \u5317\u4eac","Shanghai":"Shanghai - \u4e0a\u6d77","Tianjin":"Tianjin - \u5929\u6d25","Chongqing":"Chongqing - \u91cd\u5e86","Hong Kong":"Hong Kong - \u9999\u6e2f","Macao":"Macao - \u6fb3\u95e8","Anhui":"Anhui - \u5b89\u5fbd","Fujian":"Fujian - \u798f\u5efa","Gansu":"Gansu - \u7518\u8083","Guangdong":"Guangdong - \u5e7f\u4e1c","Guangxi":"Guangxi - \u5e7f\u897f","Guizhou":"Guizhou - \u8d35\u5dde","Hainan":"Hainan - \u6d77\u5357","Hebei":"Hebei - \u6cb3\u5317","Henan":"Henan - \u6cb3\u5357","Heilongjiang":"Heilongjiang - \u9ed1\u9f99\u6c5f","Hubei":"Hubei - \u6e56\u5317","Hunan":"Hunan - \u6e56\u5357","Jilin":"Jilin - \u5409\u6797","Jiangsu":"Jiangsu - \u6c5f\u82cf","Jiangxi":"Jiangxi - \u6c5f\u897f","Liaoning":"Liaoning - \u8fbd\u5b81","Inner Mongolia":"Inner Mongolia - \u5185\u8499\u53e4","Ningxia":"Ningxia - \u5b81\u590f","Qinghai":"Qinghai - \u9752\u6d77","Shandong":"Shandong - \u5c71\u4e1c","Shanxi":"Shanxi - \u5c71\u897f","Shaanxi":"Shaanxi - \u9655\u897f","Sichuan":"Sichuan - \u56db\u5ddd","Taiwan":"Taiwan - \u53f0\u6e7e","Tibet":"Tibet - \u897f\u85cf","Xinjiang":"Xinjiang - \u65b0\u7586","Yunnan":"Yunnan - \u4e91\u5357","Zhejiang":"Zhejiang - \u6d59\u6c5f"}};
	     $("input[name='state']").stateProvinceSelect();
	 });
</script>
<!-- Begin Google Analytics Tracking code -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'G-TX9LMVMW9X', 'auto' );

ga('send', 'pageview');
</script>
<!-- End Google Analytics Tracking code -->
</head>
<body>
<section class="limiter">
<div class="container-login">
<div class="wrap-login">
<form action="" name="login" id="login" method="post" class="login-form">
<span class="login-form-title">Create your Server Wala Cloud Data Centers Pvt. Ltd. account</span>
<div class="wrap-input">
<input class="input" type="email" name="username">
<span class="focus-input" data-placeholder="Email Address"></span>
</div>
<div class="wrap-input" data-validate="Password">
<span class="btn-show-pass">
<i class="zmdi zmdi-eye"></i>
</span>
<input class="input" type="password" name="password">
<span class="focus-input" data-placeholder="Password"></span>
</div>
<div class="text-center">
<p class="small">
I have read and accepted
<a href="https://www.serverwala.com/term-condition" target="_blank" ">Terms of services</a><a style="display: none" target="_blank">Terms of Service</a>
</p>
</div>
<div class="d-flex justify-content-between align-items-center">
<span class="text-small w-50 d-block">
<a href="?cmd=login">Returning customer?</a>
</span>
<button class="login-btn w-50" type="submit">Sign Up</button>
</div>
<div class="btn-socials">
<link  href="includes/modules/Other/cloudsignup/template/css/socialbuttons.css" media="all" rel="stylesheet" />
<a class="btn  btn-social btn-facebook" href="https://www.facebook.com/v2.2/dialog/oauth?client_id=512044533276016&state=3ba3785c928ace52a21612749cd4de4b&response_type=code&sdk=php-sdk-5.3.1&redirect_uri=https%3A%2F%2Fserverwala.cloud%2Findex.php%3Fcmd%3Dsso_facebook%26action%3Dfblogin&scope=email%2Cpublic_profile">
<span class="social-logo social-facebook"></span>
Sign in with Facebook
</a>
<link  href="includes/modules/Other/cloudsignup/template/css/socialbuttons.css" media="all" rel="stylesheet" />
<a class="btn  btn-social btn-github" href="https://github.com/login/oauth/authorize?client_id=505d753d71c17a17cad9&redirect_uri=https%3A%2F%2Fserverwala.cloud%2Findex.php%3Fcmd%3Dsso_github%26action%3Dfblogin&scope=user&state=6277f5bbf79cdd10884aa2965733ff664f362768cccacb418714103a8dcb86f9">
<span class="social-logo social-github"></span>
Sign in with Github
</a>
<link  href="includes/modules/Other/cloudsignup/template/css/socialbuttons.css" media="all" rel="stylesheet" />
<a class="btn  btn-social btn-google" href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=https%3A%2F%2Fserverwala.cloud%2Findex.php%3Fcmd%3Dsso_google%26action%3Dfblogin&client_id=354562110198-0qboits89ou1ivqvf7j5j39l4l8a6i4a.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline&approval_prompt=force">
<span class="social-logo social-google"></span>
Sign in with Google
</a>
<link  href="includes/modules/Other/cloudsignup/template/css/socialbuttons.css" media="all" rel="stylesheet" />
<a class="btn btn-social btn-twitter" href="https://api.twitter.com/oauth/authenticate?oauth_token=HGFx4QAAAAABQGX7AAABfUe0wqk">
<span class="social-logo social-twitter"></span>
Sign in with Twitter
</a>
</div>
<div class="text-center btn-login">
</div>
<input type="hidden" name="make" value="submit" />
<input type="hidden" name="send" value="Sign Up" />
<input type="hidden" name="security_token" value="1156c648a61d6c19de73c2f442340c2a" />
</form>
</div>
</div>
</section>
</body>
</html>