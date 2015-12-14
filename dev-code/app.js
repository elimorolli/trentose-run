/* your code should go here */
var RunModel={
    init:function(){
        this.dates=data;
    }
};
    
var RunController={
    init:function(){
        RunModel.init();
        RunView.init();
    },
    
    getDates: function(){
        return RunModel.dates;
    }
};
    
var RunView={
    init:function(){
        var dato=[];
        dato=RunController.getDates();
        this.display(dato);
        $("#btn-filter").click(function(){
            RunView.filter(dato);
        });
        
    },
    
    filter:function(dato){
        var filtro=[];
        var selezione=$("select").find(":selected").val(); 
        alert(selezione);
        for(i=0;i<dato.length;i++){
            if(selezione==dato[i].category){
                alert(dato[i].name);
                filtro.push(dato[i]);
            }
        }
        alert(filtro.length);
        if(filtro.length==0){
            this.display(dato);
        }
        else{
            this.display(filtro);
        }
    },
    
    
    
    display:function(dato){
        $("#top-selfiers").empty();
        for(i=0;i<dato.length;i++){
            var tmp="<li><div class='selfie'><img src='C:/Users/moroe/Documents/GitHub/trentose-run/dev-code/"+dato[i].pic+"'></div><div class='stats'> <h2>"+dato[i].name+" <small>"+dato[i].category+"</small></h2><strong>Time</strong>"+dato[i].time+" mins <strong>Selfies</strong> "+dato[i].sefies+"</div><div class='badge'>#"+i+"</div></li> ";
            $("#top-selfiers").append(tmp);
        }
    }
}


$(document).ready(function(){
    RunController.init();
});







