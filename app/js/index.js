/*EmbarkJS.Storage.setProvider('ipfs',{server: 'localhost', port: '8000'});
$(document).ready(function() {
      $("button.set").click(function() {
            var value = $("input.text").val();
            EmbarkJS.Storage.saveText(value).then(function(hash) {
                     SimpleStorage.set(hash);
            });
      });
     $("button.get").click(function() {
		EmbarkJS.Storage.get(hash).then(function(content));
             SimpleStorage.get().then(function(hash) {
                     EmbarkJS.Storage.get(hash).then(function(content) {
                              $(".value").html(content);
                    });
            });
  });
});
*
/*====================================================================================================*/
var name = document.getElementById("name_txt");
var usn = document.getElementById("usn_txt");
var marks = document.getElementById("marks_txt");
$(document).ready(function(){
 $("#storage button.uploadFile").click(function() {
    var input = $("#storage input[type=file]");
    EmbarkJS.Storage.uploadFile(input).then(function(hash) {
      $("span.fileIpfsHash").html(hash);
      $("input.fileIpfsHash").val(hash);
    });
    addToLog("#storage", "EmbarkJS.Storage.uploadFile($('input[type=file]')).then(function(hash) { })");

});
function buildData(){
	/*if($("#name_txt").val() == '' || $("#usn_txt").val() == '' || $("#marks_txt").val() == ''){
	  $('#alert').html("<strong>Warning</strong>");
	  $('#alert').fadeIn().delay(500).fadeout();
	  return null;

	else
	{*/
	  var record = name.value + "\n" + usn.value + "\n" + marks.value;
	  
	  return record;
//}

}

//$('#upload.txt').click(function() 
/*function createFile(name, type){
	var textfile = buildData();
	if(textfile!=null){
	var a = document.getElementById("a");
	var file = new Blob([textfile], {type: type});
	a.href = URL.createObjectURL(file);
	a.download = name;
}
}*/

function WritetoFile()
{
	var input = buildData();
	//if(input!=null)
	//{
	  var fso = new CreateObject("Scripting.FileSystemObject");
	  var s = fso.CreateTextFile("/home/$USER/stu.txt",true);
	s.WriteLine(input);
	s.Close();
}
