# 유저 로그인

**post /user/account/signin**

* res.send('login complete');
* res.send('wrong password');

# 유저 계정 생성

**post /user/account/signup**

* res.send('create id');
* res.send('existing id');

# 유저 방 조회

**/user/:id/rooms**

* res.json(rows);

# 유저 관리 방 조회

**/user/:id/rooms/admin**

* res.json(rows);

# 유저 방 생성

**/user/:id/rooms**

* res.send('create room');
* res.send('existing room');