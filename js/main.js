$(function () {
    $('#calculate').click(function(){
        var year = parseInt( $('#jaar').val() );

        $('#info .panel-body').html(' <div class="alert alert-success alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button><strong>Schrikkeljaar: </strong>' + Calender.Schrikkeljaar.isSchrikkeljaar(year).bericht() + '</div>' )
		.append(' <div class="alert alert-warning alert-dismissable" id="pasen"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button><strong>Pasen: </strong>' + 'in ' + year + ' is pasen op ' + Calender.Pasen.getPasen(year).datum +  '</div>' )
		.append(' <div class="alert alert-danger alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button><strong>Goede vrijdag: </strong>' + 'in ' + year + ' is Goede vrijdag op ' + Calender.goedeVrijdag.getDag().datum + '</div>' )
		.append(' <div class="alert alert-info alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button><strong>Hemelvaartsdag: </strong>' + 'in ' + year + ' is Hemelvaartsdag op ' + Calender.Hemelvaartsdag.getDag().datum + '</div>' )
		.append(' <div class="alert alert-default alert-dismissable" style="background-color:#AC92EC"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button><strong>Pinksteren: </strong>' + 'in ' + year + ' is Pinksteren op ' + Calender.Pinksteren.getDag().datum + '</div>' );
        
    });
});