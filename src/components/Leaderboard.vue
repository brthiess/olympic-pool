<template>
  <div class="leaderboard-container">
    <div class="leaderboard">
      <div class="logo">
        <div class="one">&#9675;</div>
        <div class="two">&#9675;</div>
        <div class="three">&#9675;</div>
        <div class="four">&#9675;</div>
        <div class="five">&#9675;</div>
      </div>
      <div class="text">
        <span class="scotties">Olympic Pool</span>
        <span class="leaderboard-text">Leaderboard</span>
      </div>
    </div>
    <ul>
      <li v-for="(leader, index) in leaders" :key="leader.teamName">
        <router-link class="link" :to="'/player/' + leader.id"></router-link>
        <div class="place" :class="getLeaderboardClass(index + 1)">
          {{ index + 1 }}
          <span class="ordinal">{{ getLeaderboardPlaceText(index + 1) }}</span>
        </div>
        <div class="avatar-name">
          <div class="name">{{ leader.teamName }}</div>
        </div>

        <div class="total-points">
          {{ Math.round(leader.totalPoints * 10) / 10
          }}<span class="pts">pts</span>
        </div>
        <div class="chevron">›</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    teams: Array,
    users: Array,
  },
  computed: {
    leaders() {
      let leaders = [];
      for (let i = 0; i < this.users.length; i++) {
        let totalPoints = this.getUserPoints(this.users[i], this.teams);
        leaders.push(this.users[i]);
        leaders[i].totalPoints = totalPoints;
      }
      return leaders.sort((a, b) => (a.totalPoints < b.totalPoints ? 1 : -1));
    },
  },
  methods: {
    getUserPoints(user) {
      let userPoints = 0;
      for (let i = 0; i < user.picks.length; i++) {
        userPoints += this.getTeamPoints(user.picks[i]);
      }
      return userPoints;
    },
    getTeamPoints(teamId) {
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id == teamId) {
          return this.teams[i].wins * this.teams[i].pointsPerWin;
        }
      }
    },
    getLeaderboardClass(index) {
      if (index == 1) {
        return "first shimmer";
      }
      if (index == 2) {
        return "second";
      }
      if (index == 3) {
        return "third";
      }
      return " ";
    },
    getLeaderboardPlaceText(index) {
      return this.ordinal_suffix_of(index);
    },
    ordinal_suffix_of(i) {
      var j = i % 10,
        k = i % 100;
      if (j == 1 && k != 11) {
        return "st";
      }
      if (j == 2 && k != 12) {
        return "nd";
      }
      if (j == 3 && k != 13) {
        return "rd";
      }
      return "th";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaderboard-container {
  max-width: 600px;
  margin: auto;
  margin-bottom: 100px;
}
@media only screen and (min-width: 700px) {
  .leaderboard-container {
    margin-top: 50px;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.logo {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.one,
.two,
.three,
.four,
.five {
  position: absolute;
  font-size: 80px;
  color: rgba(255, 255, 255, 0.533);
}
.one,
.two,
.three {
  top: -45px;
}
.four,
.five {
  top: -30px;
}
.one {
  color: #004bcc;
}
.two {
  left: 40px;
  color: #333c;
}
.three {
  left: 80px;
  color: #ef304dcc;
}
.four {
  left: 20px;
  color: #fcb22dcc;
}
.five {
  left: 60px;
  color: #00a75099;
}
.bottom {
  top: 17px;
  transform: rotate(180deg);
}
.left {
  transform: rotate(-90deg);
  top: 0px;
  left: -17px;
}
.leaderboard {
  background: linear-gradient(to right, #0082c9, #0082c9);
  height: 100px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  font-size: 30px;
  padding: 0 40px 0 60px;
}
.text {
  display: flex;
  flex-flow: column;
  text-transform: uppercase;
}
.scotties {
  font-size: 22.5px;
}
.leaderboard-text {
  font-size: 23.8px;
}
.header {
  text-transform: uppercase;
  background: #666;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
li {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
  position: relative;
  margin: 10px 0;
  background: #f3f3f3;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.place {
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 0;
  color: #333;
  width: 70px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6e6e6;
}
.place.first {
  background: linear-gradient(180deg, #f7ab20 0%, #f7b542 100%);
  color: white;
}
.place.second {
  background: linear-gradient(0deg, rgb(197 197 197) 0%, rgb(223 223 223) 100%);
  color: white;
}
.place.third {
  background: linear-gradient(180deg, #bd6c4d 0%, #bd6c4d 100%);
  color: white;
}
.ordinal {
  font-size: 14px;
  margin-top: 4px;
}
.avatar-name {
  display: flex;
  align-items: center;
  color: #666;
  font-weight: 500;
  font-size: 16px;
}
.avatar {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border: 3px solid #ccc;
  border-radius: 30px;
}
.name {
  width: 170px;
}
.link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.total-points {
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  color: #555;
}
.pts {
  font-size: 14px;
  color: #777;
}
.chevron {
  color: white;
  background: #f40e04aa;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0.6;
}
.shimmer {
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/400%
    100%;
  background-repeat: no-repeat;
  animation: shimmer 5s infinite;
}
@keyframes shimmer {
  20% {
    -webkit-mask-position: left;
  }
  100% {
    -webkit-mask-position: left;
  }
}
</style>
