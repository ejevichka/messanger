let data = require("./users.json");
let arr = [];
let messArr = [];
let mess = {
    10:{userid:1, msg:"1ааааааааааа", date:'2017-01-02 04:02:01', 'direction':'income'},
    11:{userid:1, msg:"1бббббббббб", date:'2017-01-02 04:02:03', 'direction':'outcome'},
    12:{userid:1, msg:"1ввввввввввв", date:'2017-01-02 04:02:06', 'direction':'income'},
    13:{userid:1, msg:"1ггггггггггггггг", date:'2017-01-02 04:02:07', 'direction':'outcome'},
    14:{userid:1, msg:"1дддддддддд", date:'2017-01-02 04:02:08', 'direction':'income'},
    15:{userid:1, msg:"1еееееееееее", date:'2017-01-02 04:02:09', 'direction':'outcome'},
    20:{userid:2, msg:"2ааааааааааа", date:'2017-01-02 05:02:01', 'direction':'income'},
    21:{userid:2, msg:"2бббббббббб", date:'2017-01-02 05:02:03', 'direction':'outcome'},
    22:{userid:2, msg:"2ввввввввввв", date:'2017-01-02 05:02:06', 'direction':'income'},
    23:{userid:2, msg:"2ггггггггггггггг", date:'2017-01-02 05:02:07', 'direction':'outcome'},
    24:{userid:2, msg:"2дддддддддд", date:'2017-01-02 05:02:08', 'direction':'income'},
    25:{userid:2, msg:"2еееееееееее", date:'2017-01-02 05:02:09', 'direction':'outcome'},
    30:{userid:3, msg:"3ааааааааааа", date:'2017-01-02 06:02:01', 'direction':'income'},
    31:{userid:3, msg:"3бббббббббб", date:'2017-01-02 06:02:03', 'direction':'outcome'},
    32:{userid:3, msg:"3ввввввввввв", date:'2017-01-02 06:02:06', 'direction':'income'},
    33:{userid:3, msg:"3ггггггггггггггг", date:'2017-01-02 06:02:07', 'direction':'outcome'},
    34:{userid:4, msg:"4дддддддддд", date:'2017-01-02 06:02:08', 'direction':'income'},
    35:{userid:5, msg:"5еееееееееее", date:'2017-01-02 06:02:09', 'direction':'outcome'},
}



for (let key in data) {
    data[key].userid = key;
    arr.push(data[key]);

}

for (let key in mess) {
    messArr.push(mess[key]);
}
console.log('JSON', arr );



let Users = module.exports = React.createClass({

    getInitialState: function() {
        return {
            id: 1,
            visible: false
        };
    },

    getUserNames: function () {

    },

    readmoreClick: function(item) {
        console.log("ITEMMMM", item);
       for(let i=0; i< messArr.length; i++) {
           if (item == messArr[i].userid) {

               this.setState({ id : messArr[i].userid, visible: true});

           } else {
               let ext = document.getElementsByClassName("shown");
               let classList = document.body.classList;
               if ( ext.length >0) {


                   for (let i = 0; i < ext.length; i++) {

                       ext[i].className = "hidden";

                   }
               }

           }
       }

    },

    componentDidMount: function() {


    },
    componentWillUnmount: function() {
      /* Больше не слушай событие "Создана новость" */
    },


    render: function() {
        let data = arr;
        let messageData = messArr;
        let self = this;
        let userIdinmess = this.state.id;




        let getInitials = function (str) {
            let mass= str.split(' ');
            let initials = '';
            mass.forEach(function (elem, i, mass) {
                initials+=elem.charAt(0);
            });
            return initials;
        };




        let usersTemplate = data.map(function(item, index) {

            return (
                <div className="subs" key={index} >
                  <div className="photo">{getInitials(item.name)}:</div>
                  <p className={item.status == 'online' ? 'online userName':'offline userName'} onClick={self.readmoreClick.bind(self, item.userid)}>{item.name} </p>

                </div>
            )
        });

        let messageTemplate = messageData.map(function(item, index) {
            return (
                <div key={index}>
                <div className={userIdinmess == item.userid ? 'shown subs':'hidden subs'}  >

                    <div className={item.direction == 'income' ? 'pull-left':'pull-right '}>{item.msg}:</div>

                </div>
                </div>
            )
        });

        return (
        <div className="flex" id="root">
            <div className="flex-itm">
                {usersTemplate}
            </div>

            <div className="flex-itm">{messageTemplate}</div>
        </div>
        );

    },



})

