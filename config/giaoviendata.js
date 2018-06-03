function initData () {
    global.giaoVien.khoaHoc = [
        {id: 0, name: "Khóa học 1", baiTap: null},
        {
            id: 1,
            name: "Khóa học 2",
            baiTap: [
                {
                    id: 0,
                    name: "Bài tập X",
                    deadline: {
                        date: "15",
                        month: "03",
                        year: "2018",
                        hour: 23,
                        minute: 55
                    },
                    lastUpdate: {
                        date: "8",
                        month: "03",
                        year: "2018",
                        hour: 11,
                        minute: 30
                    },
                    quantity: 80,
                    maxsize: 30,
                    content: "Làm theo yêu cầu <a href='/download/B%C3%A0i%20t%E1%BA%ADp%20X.pdf'>đề bài</a>.",
                    fileName: "Bài tập X"
                },
                {
                    id: 1,
                    name: "Bài tập A",
                    deadline: {
                        date: "01",
                        month: "04",
                        year: "2018",
                        hour: 23,
                        minute: 55
                    },
                    lastUpdate: {
                        date: "25",
                        month: "03",
                        year: "2018",
                        hour: 11,
                        minute: 30
                    },
                    quantity: 50,
                    maxsize: 30,
                    content: "Làm theo yêu cầu <a href='/download/B%C3%A0i%20t%E1%BA%ADp%20A.pdf'>đề bài</a>.",
                    fileName: "Bài tập A"
                }
            ]
        }
    ];
}

initData();