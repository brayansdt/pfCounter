pfCounterModule.factory('PFTipos', function(){
    var pfTipos = {};
    pfTipos.data = [
        {descricao:"EE", ponto:4},
        {descricao:"CE", ponto:4},
        {descricao:"AIE", ponto:5},
        {descricao:"ALI", ponto:7},
    ];
    
    pfTipos.query = function(){
        return pfTipos.data;
    };
    
    return pfTipos;
});