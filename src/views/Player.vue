<template>
  <div class="about">
    <h1>{{ currentUser.teamName }}</h1>
    <h3>
      <span class="total-points-header">{{
        Math.round(getTotalPoints(currentUser) * 10) / 10
      }}</span>
      Points
    </h3>
    <h4>Picks</h4>
    <ul>
      <li
        :class="getTeamFromId(pick).gender"
        v-for="(pick, index) in currentUser.picks"
        :key="index"
      >
        <div class="team-logo">
          <img :src="getTeamFromId(pick).image" />
        </div>
        <div class="team-name">
          {{ getTeamFromId(pick).name }}
          <div class="subname">{{ getTeamFromId(pick).subName }}</div>
          <div class="points-per-win">
            {{ getTeamFromId(pick).pointsPerWin }}
            <span class="points-per-win-text">Points/Win</span>
          </div>
        </div>
        <div class="points-per-win-total-points">
          <div class="total-points">
            {{
              Math.round(
                getTeamFromId(pick).pointsPerWin * getTeamFromId(pick).wins * 10
              ) / 10
            }}
            <span class="total-points-text">Total Points</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../state/user-state";

export default {
  name: "Player",
  props: {
    teams: Array,
  },
  data() {
    return {
      users: store.users,
    };
  },
  computed: {
    currentUser() {
      let currentUser = this.users.filter((user) => {
        return user.id == this.$route.params.id;
      })[0];
      return currentUser;
    },
  },
  methods: {
    getTeamFromId(teamId) {
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id == teamId) {
          return this.teams[i];
        }
      }
    },
    getTotalPoints(user) {
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
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 30px 20px;
  background: #242460;
  color: white;
  font-size: 40px;
}
h3 {
  font-weight: 300;
  text-align: center;
  padding: 0 20px 20px;
  margin-top: 20px;
}
.total-points-header {
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  display: block;
}
h4 {
  font-size: 26px;
  text-align: center;
  margin-top: 30px;
}
ul {
  list-style: none;
  padding: 0 20px;
  margin-bottom: 100px;
}
li {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  background: #eee;
  margin: 30px auto;
  padding: 10px 15px 10px 25px;
  display: flex;
  height: 100px;
  align-items: center;
  max-width: 400px;
  position: relative;
}
li.male:after,
li.female:after {
  content: "";
  position: absolute;
  left: 0;
  width: 10px;
  height: 100px;
}
li.male:after {
  background: #2980b9;
}
li.female:after {
  background: #c0392b;
}
.total-points {
  display: flex;
  flex-flow: column;
  font-size: 28px;
  font-weight: bold;
}
.points-per-win {
  font-weight: 300;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.points-per-win-total-points {
  margin-left: auto;
}
.total-points-text,
.points-per-win-text {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 300;
}
.points-per-win-text {
  margin-left: 5px;
}
.team-logo {
  height: 60px;
  margin-right: 20px;
  width: 60px;
  border-radius: 30px;
  flex-shrink: 0;
  overflow: hidden;
}
.team-name {
  font-size: 19px;
  width: 180px;
}
img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
.subname {
  font-size: 14px;
  color: #666;
}
</style>
