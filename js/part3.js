/**
 * $()
 *
 * $().on('click', function() {
 *
 * })
 *
 * const season = "";
 * let votesCount = "";
 *
 *
 * if() {
 *
 * } else if() {
 *
 * } else {
 *
 * }
 */

// id="btn-start"がついている場所がクリックされたら

$("#btn-start").on("click", function () {
  const randomRate = Math.ceil(Math.random() * 10);

  if (randomRate >= 9) {
    // 9 or 10 の場合
    $("#result-text").html("ゼミガメが現れた！");
  } else if (randomRate >= 6) {
    // 1 or 2 の場合
    $("#result-text").html("ヒトカゲが現れた！");

  } else if (randomRate < 4){
    $("#result-text").html("変態が現れた");
  } else {
    $("#result-text").html("王様が現れた！");
  }

  // 結果を表示
});