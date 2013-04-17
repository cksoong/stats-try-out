/**
 * Created with JetBrains WebStorm.
 * User: ck
 * Date: 4/9/13
 * Time: 9:31 PM
 * To change this template use File | Settings | File Templates.
 */

var daveReputation_nusArt = new Array(0.5, 0.5, 0.5, 0.5, 0.9, 0.8, 0.7, 0.7, 0.6, 0.6, 0.4, 0.4, 0.4, 0.3, 0.3, 0.2, 0.1);


var daveReputation_nusEngin_compressed = function(){
    this.variance = 1.2;
    this.mean = 0.5;
}

var daveReputation_nusArt_compressed = function(){
    this.variance = 1.2;
    this.mean = 0.5;
}

var daveReputation_nusLaw_compressed = function(){
    this.variance = 1.2;
    this.mean = 0.5;
}



function isNum(args)
{
    args = args.toString();

    if (args.length == 0)
        return false;

    for (var i = 0;  i<args.length;  i++)
    {
        if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != "."&& args.substring(i, i+1) != "-")
        {
            return false;
        }
    }

    return true;
}

//mean of an number array
function mean(reputationArray)
{
    var len = 0;
    var sum = 0;

    for(var i=0;i<reputationArray.length;i++)
    {

            len = len + 1;
            sum = sum + parseFloat(reputationArray[i]);

    }

    return sum / len;
}

//Variance of a number array
function variance(reputationArray)
{
    var len = 0;
    var sum=0;
    for(var i=0;i<reputationArray.length;i++)
    {
        if (reputationArray[i] == ""){}
        else if (!isNum(reputationArray[i]))
        {
            alert(reputationArray[i] + " is not number, Variance Calculation failed!");
            return 0;
        }
        else
        {
            len = len + 1;
            sum = sum + parseFloat(reputationArray[i]);
        }
    }

    var v = 0;
    if (len > 1)
    {
        var mean = sum / len;
        for(var i=0;i<reputationArray.length;i++)
        {
            if (reputationArray[i] == ""){}
            else
            {
                v = v + (reputationArray[i] - mean) * (reputationArray[i] - mean);
            }
        }

        return v / len;
    }
    else
    {
        return 0;
    }
}

// Get std Deviation
function stdDev(reputationArray) {
    var std = Math.sqrt(variance(reputationArray));
    return std;
}


//Get the largest number of a number array
function max(arr)
{
    var max = -99999;

    for(var i=0;i<arr.length;i++)
    {
        if (arr[i] == ""){}
        else if (!isNum(arr[i]))
        {
            alert(arr[i] + " is not number!");
            return;
        }
        else
        {
            if (i == 0) {max = arr[i];}
            else if (max < arr[i]) {max = arr[i];}
        }
    }

    return max;
}

//Get the smallest number of a number array
function min(arr)
{
    var min = 99999;

    for(var i=0;i<arr.length;i++){

        if (arr[i] == ""){}
        else if (!isNum(arr[i]))
        {
            alert(arr[i] + " is not number!");
            return;
        }
        else
        {
            if (i == 0) {min = arr[i];}
            else if (min > arr[i]) {min = arr[i];}
        }
    }

    return min;
}


//median of a number array
function median(reputationArray)
{
    reputationArray.sort(function(a,b){return a-b});

    var median = 0;

    if (reputationArray.length % 2 == 1)
    {
        median = reputationArray[(reputationArray.length+1)/2 - 1];
    }
    else
    {
        median = (1 * reputationArray[reputationArray.length/2 - 1] + 1 * reputationArray[reputationArray.length/2] )/2;
    }

    return median;
}

function storeStats(flag,reputationArray){
 //Standard deviation
    var std = Math.sqrt(variance(reputationArray));

//Standard error
    var stdError = Math.sqrt(variance(reputationArray)/(reputationArray.length-1));


    if (flag ==1){

        statsStore.std =  Math.sqrt(variance(reputationArray));
        statsStore.stdError = Math.sqrt(variance(reputationArray)/(reputationArray.length-1));

    }
}

function alterReputation (reputationArray,identifier,newvalue){


        reputationArray.identifier = newvalue;


}

var NormalDistribution = function(u, vaR){

    var e = Math.E;
    var pi = Math.PI;
    var stdD = Math.sqrt(vaR);

    this.get_Fx = function(x){

        var Fx = ( 1/(stdD*Math.sqrt(2*pi)) ) *
                    Math.pow(e, - ( Math.pow(x-u,2)/(2*vaR) ) );

        return Fx;

    }

    this.get_x = function(fx){

        var x = Math.sqrt(
                -(Math.log(fx*stdD*Math.sqrt(2*pi)) * 2*vaR)
            ) + u;

        return x;

    }

}

var normalDis = new NormalDistribution(daveReputation_nusArt);