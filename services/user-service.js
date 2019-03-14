"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delayPromise = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(true);
        }, 3000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDekIsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsa0JBQWU7SUFFYixXQUFXLEVBQVgsVUFBWSxlQUF3QjtRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixlQUFlLEVBQUUsZUFBZTtnQkFDaEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLFVBQUMsR0FBUTtvQkFDaEIsT0FBTyxDQUFDO3dCQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3dCQUNwQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7d0JBQ3hCLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYTt3QkFDaEMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO3FCQUNYLENBQUMsQ0FBQTtnQkFDSixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQVE7b0JBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLEVBQUw7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDUCxPQUFPLEVBQUUsVUFBQyxHQUFrQztvQkFDMUMsSUFBRyxHQUFHLENBQUMsSUFBSSxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQzs0QkFDTCxNQUFNLEVBQUUsY0FBYzt5QkFDdkIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLEVBQVQsVUFBVSxVQUE4QjtRQUN0QyxPQUFPLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QixPQUFPLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxheVByb21pc2UgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9LCAzMDAwKTtcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGdldFVzZXJJbmZvKHdpdGhDcmVkZW50aWFsczogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIGxhbmc6ICdlbicsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIHJhd0RhdGE6IHJlcy5yYXdEYXRhLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiByZXMuc2lnbmF0dXJlLFxuICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogcmVzLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgICBpdjogcmVzLml2XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGxvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzczogKHJlczogd3guTG9naW5TdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcbiAgICAgICAgICBpZihyZXMuY29kZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgIGVyck1zZzogJ0xvZ2luIGZhaWxlZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgbW9ja0RlbGF5KGRlbGF5SXRlbXM6ICgpID0+IFByb21pc2U8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGRlbGF5UHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIGRlbGF5SXRlbXMoKTtcbiAgICB9KVxuICB9XG5cbn0iXX0=