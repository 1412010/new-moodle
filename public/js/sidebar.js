$(document).ready(function() {
  var eventData = [
    {
      date: "2018-06-08",
      badge: true,
      title: "Ngày 08-06-2018",
      body: '<p class="lead">Các sự kiện:</p><p><a href="/student/deadline/bt2">Khóa học 1 - Nộp Bài tập 2 - 23h55</a></p>',
      footer: '',
      classname: "purple-event",
      modal: true
    },
    {
        date: "2018-03-06",
        badge: true,
        title: "Ngày 06-03-2018",
        body: '<p class="lead">Các sự kiện:</p><p><a href="/student/deadline/bt1">Khóa học 1 - Nộp Bài tập 1 - 23h55</a></p>',
        footer: '',
        classname: "purple-event",
        modal: true
      }
  ];
  $("#my-calendar").zabuto_calendar({
    language: "en",
    today: true,
    data: eventData
  });
});
