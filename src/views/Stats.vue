<template>
  <div class="about">
    <h1>Stats</h1>
    <h2>Most Popular Teams</h2>
    <ul>
      <li
        :class="team.gender"
        v-for="team in mostPopularTeams"
        :key="team.teamId"
      >
        <div class="team-logo">
          <img :src="team.image" />
        </div>
        <div class="team-name">
          {{ team.name }}
          <div class="subname">{{ team.subName }}</div>
        </div>
        <div class="team-picks">
          <div class="team-picks-number">{{ team.totalPicks }}</div>
          Picks
        </div>
        <div class="team-percentage">
          <div class="team-picks-percentage-number">
            {{ Math.round(team.percentageOfTotalPicks * 10) / 10 }}%
          </div>
          of all users
        </div>
      </li>
    </ul>
    <h2>Best Performing Teams</h2>
    <ul>
      <li :class="team.gender" v-for="team in bestTeams" :key="team.teamId">
        <div class="team-logo">
          <img :src="team.image" />
        </div>
        <div class="team-name team-name-performing">
          {{ team.name }}
          <div class="subname">{{ team.subName }}</div>
          <div class="team-picks">
            <div class="team-points-per-win">
              {{ team.pointsPerWin }} Pts/Win
            </div>
          </div>
        </div>

        <div class="team-percentage">
          <div class="team-picks-percentage-number">
            {{ Math.round(team.totalPoints * 10) / 10 }}
          </div>
          Total Points
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../state/user-state";

export default {
  name: "About",
  props: {
    teams: Array,
  },
  methods: {
    getTeamFromId(teamId) {
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id == teamId) {
          return this.teams[i];
        }
      }
    },
  },
  computed: {
    mostPopularTeams() {
      let popularTeams = [];
      let popularPicks = {};
      let totalPicks = 0;
      for (let i = 0; i < this.users.length; i++) {
        for (let j = 0; j < this.users[i].picks.length; j++) {
          if (!popularPicks[this.users[i].picks[j]]) {
            popularPicks[this.users[i].picks[j]] = 0;
          }
          popularPicks[this.users[i].picks[j]] += 1;
          totalPicks += 1;
        }
      }
      for (const teamId in popularPicks) {
        let team = this.getTeamFromId(teamId);
        team.totalPicks = popularPicks[teamId];
        team.percentageOfTotalPicks = (team.totalPicks / totalPicks) * 6 * 100;
        popularTeams.push(this.getTeamFromId(teamId));
      }
      return popularTeams.sort((a, b) =>
        a.percentageOfTotalPicks < b.percentageOfTotalPicks ? 1 : -1
      );
    },
    bestTeams() {
      let bestTeams = [];
      for (let i = 0; i < this.teams.length; i++) {
        bestTeams.push(this.teams[i]);
        bestTeams[i].totalPoints =
          this.teams[i].pointsPerWin * this.teams[i].wins;
      }
      return bestTeams.sort((a, b) => (a.totalPoints < b.totalPoints ? 1 : -1));
    },
  },
  data() {
    return {
      users: store.users,
    };
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
h2 {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}
li {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 100px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
}
.team-name {
  width: 200px;
}
ul {
  max-width: 600px;
  margin: auto;
}
li {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  background: #eee;
  padding: 10px 15px 10px 25px;
  display: flex;
  height: 100px;
  align-items: center;
  width: 100%;
  margin: 10px 0;
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
.team-logo {
  height: 50px;
  margin-right: 20px;
  width: 50px;
  border-radius: 30px;
  flex-shrink: 0;
  overflow: hidden;
}
.team-name {
  font-size: 17px;
  width: 120px;
}
.team-name-performing {
  margin-right: auto;
}
img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
.subname {
  font-size: 15px;
  color: #666;
}
.team-picks-number {
  font-size: 18px;
  color: #333;
}
.team-points-per-win {
  font-size: 14px;
  color: #666;
  margin-left: 0;
  text-align: left;
  margin-top: 10px;
}
.team-picks-percentage-number {
  font-weight: bold;
  font-size: 18px;
  color: #333;
}
.team-picks,
.team-percentage {
  text-align: center;
  color: #888;
  font-size: 14px;
}
.about {
  margin-bottom: 100px;
}
</style>
