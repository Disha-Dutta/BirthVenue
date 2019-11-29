var app=angular.module("myapp",[]);
app.controller("ListController",['$scope', function($scope){
    $scope.personalDetails=[
        {
            'fname':'john',
            'lname':'bradley',
            'email':'bradley@example.com',
            'gender': 'female',
            'id': 'john.bradley',
            'age': 20,
            'homePhone': 9999999999,
            'officePhone': 9090909090,
            'presentAddress':'B-589, M-32, Rajouri Garden',
            'presentCity':'Delhi',
            'presentZipCode': 110026,
            'presentState' : 'Delhi',
            'parmanentAddress':'B-589, M-32, Rajouri Garden',
            'parmanentCity':'Delhi',
            'parmanentZipCode': 110026,
            'parmanentState' : 'Delhi'
        }
    ];
    $scope.activeForm = {
        'homeAdressFormActive' : true,
        'officeAdressFormActive' : false,
    }
    $scope.addNew=function(personalDetails){$scope.personalDetails.push({
            'fname':personalDetails.fname,
            'lname':personalDetails.lname,
            'email':personalDetails.email,
            'gender':personalDetails.gender,
            'id':personalDetails.id,
            'age':personalDetails.age,
            'homePhone':personalDetails.homePhone,
            'officePhone':personalDetails.officePhone,
            'presentAddress': personalDetails.presentAddress,
            'presentCity':personalDetails.presentCity,      
            'presentZipCode':personalDetails.presentZipCode, 
            'presentState':personalDetails.presentState ,  
            'parmanentAddress': personalDetails.parmanentAddress,
            'parmanentCity':personalDetails.parmanentCity,      
            'parmanentZipCode':personalDetails.parmanentZipCode, 
            'parmanentState':personalDetails.parmanentState       
        });
        $scope.PD={};
    };
    $scope.activeHomeAdressForm = function(){
        $scope.activeForm.homeAdressFormActive = true;
        $scope.activeForm.officeAdressFormActive = false;
    };
    $scope.activeOfficeAdressForm = function(){
        $scope.activeForm.officeAdressFormActive = true;
        $scope.activeForm.homeAdressFormActive = false;
    };
    $scope.remove=function(){
        var newDataList=[];
        $scope.selectedAll=false;
        angular.forEach($scope.personalDetails,function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetails=newDataList;
    };
    $scope.checkAll=function(){
        if(!$scope.selectedAll){
            $scope.selectedAll=true;
        }
        else{
            $scope.selectedAll=false;
        }
        angular.forEach($scope.personalDetails,function(personalDetails){
            personalDetails.selected=$scope.selectedAll;
        });
    };
    $scope.query='';
    $scope.search=function(user){
        var query=$scope.query.toLowerCase(),
            searchfilter=user.age+' '+user.gender;
        if(searchfilter.indexOf(query)!=-1){
            return true;
        }
        return false;
    };
}]);