<template>
  <div class="about">
    <h1>Rules</h1>
    <div class="rules">
      <p>
        The rules are simple. Pick 6 teams - 3 in each gender - and for each win
        one of your teams get, you get a certain amount of points per win. The
        amount of points you get per win depends on which teams you pick. Better
        teams get less points per win and worse teams get more points per win.
      </p>

      <p>Every draw (including tie-breakers and playoffs) will count.</p>

      <div class="row">
        <p class="province"><strong>Country</strong></p>
        <p class="team-name"><strong>Team</strong></p>
        <p class="points-per-win"><strong>Pts/Win</strong></p>
      </div>

      <div class="row">
        <p class="province">Canada</p>
        <p class="team-name">Gushue</p>
        <p class="points-per-win">1.0</p>
      </div>
      <div class="row">
        <p class="province">Great Britain</p>
        <p class="team-name">Mouat</p>
        <p class="points-per-win">1.0</p>
      </div>
      <div class="row">
        <p class="province">Sweden</p>
        <p class="team-name">Edin</p>
        <p class="points-per-win">1.1</p>
      </div>
      <div class="row">
        <p class="province">Switzerland</p>
        <p class="team-name">de Cruz</p>
        <p class="points-per-win">1.3</p>
      </div>

      <div class="row">
        <p class="province">USA</p>
        <p class="team-name">Shuster</p>
        <p class="points-per-win">1.6</p>
      </div>
      <div class="row">
        <p class="province">Italy</p>
        <p class="team-name">Retornaz</p>
        <p class="points-per-win">1.7</p>
      </div>
      <div class="row">
        <p class="province">Norway</p>
        <p class="team-name">Walstad</p>
        <p class="points-per-win">1.8</p>
      </div>

      <div class="row">
        <p class="province">Russia</p>
        <p class="team-name">Glukhov</p>
        <p class="points-per-win">2.2</p>
      </div>
      <div class="row">
        <p class="province">Denmark</p>
        <p class="team-name">Krause</p>
        <p class="points-per-win">2.5</p>
      </div>
      <div class="row">
        <p class="province">China</p>
        <p class="team-name">Ma</p>
        <p class="points-per-win">3.0</p>
      </div>

      <br /><br />
      <div class="row">
        <p class="province">Sweden</p>
        <p class="team-name">Hasselborg</p>
        <p class="points-per-win">1.0</p>
      </div>
      <div class="row">
        <p class="province">Switzerland</p>
        <p class="team-name">Tirinzoni</p>
        <p class="points-per-win">1.1</p>
      </div>
      <div class="row">
        <p class="province">Canada</p>
        <p class="team-name">Jones</p>
        <p class="points-per-win">1.3</p>
      </div>
      <div class="row">
        <p class="province">Great Britain</p>
        <p class="team-name">Muirhead</p>
        <p class="points-per-win">1.4</p>
      </div>
      <div class="row">
        <p class="province">Russia</p>
        <p class="team-name">Kovaleva</p>
        <p class="points-per-win">1.7</p>
      </div>
      <div class="row">
        <p class="province">Japan</p>
        <p class="team-name">Fujisawa</p>
        <p class="points-per-win">1.8</p>
      </div>
      <div class="row">
        <p class="province">USA</p>
        <p class="team-name">Peterson</p>
        <p class="points-per-win">1.8</p>
      </div>
      <div class="row">
        <p class="province">Korea</p>
        <p class="team-name">Kim</p>
        <p class="points-per-win">1.9</p>
      </div>

      <div class="row">
        <p class="province">China</p>
        <p class="team-name">Han</p>
        <p class="points-per-win">2.5</p>
      </div>
      <div class="row">
        <p class="province">Denmark</p>
        <p class="team-name">Dupont</p>
        <p class="points-per-win">3.0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
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
p {
  margin: 20px 0;
  padding: 0 20px;
}
.row {
  display: flex;
}
.row p {
  margin: 0;
}
.province {
  width: 150px;
}
.team-name {
  width: 140px;
}
.about {
  margin-bottom: 100px;
}
</style>
