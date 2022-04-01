# 유저 방 조회

**get /user/:id/rooms**

* res.json(rows);

# 유저 관리 방 조회

**get /user/:id/rooms/admin**

* res.json(rows);

# 유저 방 생성

**post /user/:id/rooms**

* res.send('create room');
* res.send('existing room');

# 유저 방 참가

**post /user/:id/rooms/:room**

* res.send('not existing room');
* res.send('already existing room');
* res.send('join room');

# Oauth 유저 이메일 조회 & 토큰 재발급

**get /oauth/user/info**

* res.json({
          email: email,
          ID: ans[0].id
        });