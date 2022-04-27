


  n = 5;
  lost = [1];
  reserve = [1, 3, 5];
//  *
//  * 일단 reserve에서 lost에 있는 것을 빼야한다. => uLost, uReserve
//  * uReserve의 탐색을 빠르게 하기 위해 Set으로 한다.
//  * result에 최댓값을 저장하기 위해 n - uLost.length로 설정한다.
//  */
function solution(n, lost, reserve) {
  const uLost = lost.filter((item) => !reserve.includes(item)); // 여기는 진짜 잃어버린 애들
  console.log("uLost:", uLost);
  const uReserve = new Set(reserve.filter((item) => !lost.includes(item))); // item은 3인데 filter를 통해  !lost.includes(item) 이러한 애들로 uReserve를 꾸린다.
  console.log("uReserve :",uReserve);
  let result = n - uLost.length; //여기서 result 가 3이네
  uLost.forEach((lostItem) => { // 여기서 lost Item은 2, 4
    // console.log("forEach문 안에 :", lostItem)
    //   (uLost.forEach(lostItem => console.log("lostitem:", lostItem)));
    if (uReserve.has(lostItem - 1)) { //uReserve가 (lostItem -1)을 가진게 트루라면
        // console.log("if문 안에 :", uReserve)
      uReserve.delete(lostItem - 1);
    //   console.log("if문 안에 delete 이후 :", uReserve)
      result += 1;
    } else if (uReserve.has(lostItem + 1)) {
        console.log("if문 안에 :", uReserve)
      uReserve.delete(lostItem + 1); 
      console.log("if문 안에 delete 이후 :", uReserve)
      result += 1;
    }
  });
  console.log(result);
  return result;
}

solution(n, lost, reserve);