const base = {
    get() {
                return {
            url : "http://localhost:8090/hostel/",
            name: "hostel",
            // 退出到首页链接
            indexUrl: 'http://localhost:8090/hostel/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "电击小子宿舍管理系统"
        } 
    }
}
export default base
