  jQuery("input[type=button]").click(function() {
    var $target         = "testvid_"+jQuery(this).attr("rel");
    var $content_path   = "/img/videos/";
    var $vid_obj        = _V_("mi_video");
 
    // oculta el poster actualmente cargado
    jQuery("img.vjs-poster").hide();
 
    $vid_obj.ready(function() {
      // Parar el vídeo que se estaba reproduciendo
      $vid_obj.pause();
 
      // asigna los nuevos vídeos a los nodos correspondientes del reproductor
      jQuery("video:nth-child(1)").attr("src",$content_path+$target+".mp4");
      jQuery("video:nth-child(1)").attr("src",$content_path+$target+".ogv");
      jQuery("video:nth-child(1)").attr("src",$content_path+$target+".webm");
 
      // sustituye la fuente del poster
      jQuery("img.vjs-poster").attr("src",$content_path+$target+".jpg").show();
      // restaura estado UI 
	  jQuery(".vjs-big-play-button").show();
      jQuery("#div_video").removeClass("vjs-playing").addClass("vjs-paused");
      // carga las nuevas fuentes
      $vid_obj.load();
      jQuery("#div_video_html5_api").show();
    });
});
 
jQuery("input[rel='01']").click();