"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delayPromise = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(true);
        }, 300);
    });
};
exports.default = {
    getUserInfo: function (withCredentials) {
        return new Promise(function (resolve, reject) {
            wx.getUserInfo({
                withCredentials: withCredentials,
                lang: 'en',
                success: function (res) {
                    resolve({
                        userInfo: res.userInfo,
                        rawData: res.rawData,
                        signature: res.signature,
                        encryptedData: res.encryptedData,
                        iv: res.iv
                    });
                },
                fail: function (err) {
                    reject(err);
                }
            });
        });
    },
    login: function () {
        return new Promise(function (resolve, reject) {
            wx.login({
                success: function (res) {
                    if (res.code) {
                        resolve(res.code);
                    }
                    else {
                        reject({
                            errMsg: 'Login failed'
                        });
                    }
                }
            });
        });
    },
    mockDelay: function (delayItems) {
        return delayPromise().then(function () {
            return delayItems();
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDekIsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsa0JBQWU7SUFFYixXQUFXLEVBQVgsVUFBWSxlQUF3QjtRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixlQUFlLEVBQUUsZUFBZTtnQkFDaEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLFVBQUMsR0FBUTtvQkFDaEIsT0FBTyxDQUFDO3dCQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3dCQUNwQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7d0JBQ3hCLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYTt3QkFDaEMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO3FCQUNYLENBQUMsQ0FBQTtnQkFDSixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQVE7b0JBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLEVBQUw7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDUCxPQUFPLEVBQUUsVUFBQyxHQUFrQztvQkFDMUMsSUFBRyxHQUFHLENBQUMsSUFBSSxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQzs0QkFDTCxNQUFNLEVBQUUsY0FBYzt5QkFDdkIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLEVBQVQsVUFBVSxVQUE4QjtRQUN0QyxPQUFPLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QixPQUFPLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxheVByb21pc2UgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9LCAzMDApO1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgZ2V0VXNlckluZm8od2l0aENyZWRlbnRpYWxzOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgbGFuZzogJ2VuJyxcbiAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgcmF3RGF0YTogcmVzLnJhd0RhdGEsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5zaWduYXR1cmUsXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiByZXMuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgIGl2OiByZXMuaXZcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiAocmVzOiB3eC5Mb2dpblN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgZXJyTXNnOiAnTG9naW4gZmFpbGVkJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBtb2NrRGVsYXkoZGVsYXlJdGVtczogKCkgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGVsYXlQcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gZGVsYXlJdGVtcygpO1xuICAgIH0pXG4gIH1cblxufSJdfQ==