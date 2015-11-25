
$( function() {
        var endDate = "December  23, 2016 15:03:25";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<li><span>" + this.leadingZeros(data.days, 2) + " </span>days</li><li><span>" + this.leadingZeros(data.hours, 2) + " </span>hrs</li><li><span>" + this.leadingZeros(data.min, 2) + " </span>min</li><li><span>" + this.leadingZeros(data.sec, 2) + " </span>sec</li>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
		
		
		
      });
   
   

