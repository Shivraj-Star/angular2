System.register([], function(exports_1) {
    var authService;
    return {
        setters:[],
        execute: function() {
            ;
            authService = (function () {
                function authService() {
                    this.authList = [
                        { name: "Kaushal Rajkotia", contact: 9325145236, city: 'Mumbai', email: 'padwal.shivraj@gmail.com' },
                        { name: 'Viren Ajmera', contact: 7588937393, city: 'Pune', email: 'Viru@gmail.com' },
                        { name: 'shivraj padwal', contact: 9745937393, city: 'Mumbai', email: 'padwal.shivraj@gmail.com' },
                        { name: 'Prasad Bhosale', contact: 8888937393, city: 'Kolhapur', email: 'prasad@gmail.com' }
                    ];
                    this.userCity = ['Aurangabad', 'Badalapur', 'Osmanabad', 'Pune', 'Mumbai', 'Barshi', 'Kolhapur'];
                }
                return authService;
            })();
            exports_1("authService", authService);
        }
    }
});
//# sourceMappingURL=user.service.js.map