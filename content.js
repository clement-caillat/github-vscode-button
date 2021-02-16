let url = window.location.href;
url = url.split('/');
let user = url[3];
let repo = url[4];
let ur = user + '/' + repo;
url = "https://github1s.com/" + ur;

var public = $("meta[name='octolytics-dimension-repository_public']").attr("content");

if (public == 'true') {
    $('.file-navigation.mb-3.d-flex.flex-items-start').append('<button id="seeonvscode_btn" class="btn ml-2 d-none d-md-block"><i class="fab fa-github-alt"></i>             VSCode</button>');
    
    $('#seeonvscode_btn').click(function(){
        document.location.href = "https://github1s.com/" + ur;
    });
}
