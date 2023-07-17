function qualifyInit () {
  var qualify_percent = ($('#qualify').val() / 6 * 100);
  $('#qualify_percent').css('width', qualify_percent + '%');
  $('#qualify_percent_val').html($('#qualify').val());
}

function clusterInit () {
  var max_limit_cluster_members = 10000,
      max_limit_cluster_percent = 10;

  var cluster_percent = ($('#cluster_members').val() / max_limit_cluster_members * 100);

  $('#cluster_percent').css('width', cluster_percent + '%');
  $('#cluster_percent_val').html((cluster_percent / max_limit_cluster_percent).toFixed(2));
}

function sectionsInit () {
  var min_limit_sections_cnt = 0,
      max_limit_sections_cnt = 1100,
      max_limit_sections_percent = 10,
      sections_qnt_val = $('#sections_qnt').val();

  if(sections_qnt_val > min_limit_sections_cnt && sections_qnt_val <= max_limit_sections_cnt) {
    $.each(sections_qnt_data, function(index, data) {
      if(sections_qnt_val >= parseInt(data.min) && sections_qnt_val <= parseInt(data.max)) {
        var self_percent = (parseInt(data.percent) / max_limit_sections_percent * 100);
        $('#self_percent').css('width', self_percent + '%');
        $('#self_percent_val').html(data.percent);
      }
    });
  }else if (sections_qnt_val > max_limit_sections_cnt) {
    $('#self_percent').css('width', 100 + '%');
    $('#self_percent_val').html(max_limit_sections_percent);
  }else{
    $('#self_percent').css('width', min_limit_sections_cnt + '%');
    $('#self_percent_val').html(min_limit_sections_cnt);
  }
}

function sumPercentInit () {
  var sum_percent = Number($('#self_percent_val').text()) + Number($('#cluster_percent_val').text()) + Number($('#qualify_percent_val').text());

  $('#res_2').html(sum_percent.toFixed(2));
}

function sumInit () {
  var sum = $('#sections_qnt').val() * 1000 * Number($('#res_2').text()) / 100 * 11;

  if(sum > 0){
    $('#res').html(sum);
  }
}

var sections_qnt_data = {
  0: {
    min: '1',
    max: '50',
    percent: '4'
  },
  1: {
    min: '51',
    max: '100',
    percent: '5'
  },
  2: {
    min: '101',
    max: '200',
    percent: '5.5'
  },
  3: {
    min: '201',
    max: '300',
    percent: '6'
  },
  4: {
    min: '301',
    max: '400',
    percent: '6.5'
  },
  5: {
    min: '401',
    max: '500',
    percent: '7'
  },
  6: {
    min: '501',
    max: '600',
    percent: '7.5'
  },
  7: {
    min: '601',
    max: '700',
    percent: '8'
  },
  8: {
    min: '701',
    max: '800',
    percent: '8.5'
  },
  9: {
    min: '801',
    max: '900',
    percent: '9'
  },
  10: {
    min: '901',
    max: '1000',
    percent: '9.5'
  },
  11: {
    min: '1001',
    max: '1100',
    percent: '10'
  },
}

$(document).ready(function() {
  $('#sections_qnt').val('0');
  $('#cluster_members').val('0');
});

$(document).on('change', '#sections_qnt', function () {
  sectionsInit();
});

$(document).on('change', '#cluster_members', function () {
  clusterInit();
});

$(document).on('change', '#qualify', function () {
  qualifyInit();
});

$(document).on('click', '#calc', function () {
  sumPercentInit();
  sumInit();
});
