pfCounterModule.controller('ContagemController', [
    '$scope', 'PFTipos',
    function($scope, PFTipos){
        $scope.tiposDePF = PFTipos.query();
        $scope.contagens = {
            data: [],
            totalDePontos: 0
        };        
        var recalculateTotal = function(){
            var pontos = 0;
            for(var count = 0; count < $scope.contagens.data.length; count++){
                pontos += $scope.contagens.data[count].tipoPF.ponto;
            }
            $scope.contagens.totalDePontos = pontos;
        };
        $scope.$watch('contagens.data', recalculateTotal, true);
        
        
        $scope.addContagem = function(){
            //adicinar validação
            if(isNaN(ContagemForm.pontoPF.value)){
                return false;
            }
            
            var selectedTipoPF = $scope.tiposDePF[Number(ContagemForm.pontoPF.value)];
            var contagem = {
                requisito: ContagemForm.requisito.value,
                descricao: ContagemForm.descricao.value,                
                tipoPF: selectedTipoPF
            };
            $scope.contagens.data.push(contagem);
            
            ContagemForm.reset();
        };
        
        $scope.removeContagem = function(index){
            $scope.contagens.data.splice(index, 1);
        };
    }
]);