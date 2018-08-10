import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-reserve',
  template: `
    <!-- reserve page -->
    <div class="reserve-page">

      <!-- reserve calendar & basic info -->
      <div class="reserve-info">

        <!-- reserve calendar -->
        <section class="reserve-calendar">
        </section>
        <!-- reserve calendar -->

        <!-- reserve basic info table -->
        <section class="reserve-basic-info">
          <p class="today-date">오늘 2018년 08월 10일(금)</p>
          <table class="basic-info-table">
            <tbody>
              <tr>
                <th scope="row">펜션명</th>
                <td>가평 청평플로리안펜션</td>
              </tr>
              <tr>
                <th scope="row">주소</th>
                <td>경기 가평군 상면 덕현리 332-2</td>
              </tr>
              <tr>
                <th scope="row">결제방법</th>
                <td>카드 / 무통장</td>
              </tr>
              <tr>
                <th scope="row">요금타입</th>
                <td>
                  <span>08월 10일</span>
                  은 준성수기/금 요금이 적용됩니다.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- reserve basic info table -->

      </div>
      <!-- reserve calendar & basic info -->

      <!-- date selected -->
      <div class="select-date">
        <p>선택일: <span>2018-08-10 </span> <span>(금)</span></p>
      </div>
      <!-- date selected -->

      <!-- room info -->
      <div class="room-info">

        <!-- room info table -->
        <table class="room-info-table">

          <!-- table header -->
          <thead class="thead-light">
            <tr>
              <th scope="col">객실명</th>
              <th scope="col">상태</th>
              <th scope="col">크기/인원</th>
              <th scope="col">기간</th>
              <th scope="col">인원</th>
              <th scope="col">기본금액</th>
              <th scope="col">이용금액</th>
            </tr>
          </thead>
          <!-- table header -->

          <!-- for each room -->
          <tbody>
            <tr>
              <td class="pension-name">
                <span>
                  <input type="checkbox">
                  <label>VILLA C동(스파)</label>
                </span>
              </td>
              <td><button type="button" class="btn btn-danger btn-sm">예약가능</button></td>
              <td>18평, 2명 / 4명</td>
              <td>

                <!-- for period -->
                <div class="input-group mb-3">
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>1박</option>
                    <option value="2">2박</option>
                  </select>
                </div>
                <!-- for period -->

              </td>
              <td>

                <!-- the number of people for each room -->
                <span>성인:
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>2명</option>
                    <option value="1">1명</option>
                  </select>
                </span>

                <span> 아동:
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>0명</option>
                    <option value="1">1명</option>
                  </select>
                </span>

                <span> 유아:
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>0명</option>
                    <option value="1">1명</option>
                  </select>
                </span>
                <!-- the number of people for each room -->

              </td>
              <td class="basic-price">239,000원</td>
              <td>239,000원</td>
            </tr>
            </tbody>
        </table>
        <!-- room info table -->

        <!-- total price for the room selected -->
        <div class="total-price">
          <p>
            <strong>결제금액:</strong>
            <span ></span>
            <span>원</span>
          </p>
        </div>
        <!-- total price for the room selected -->

      </div>
      <!-- room info -->

      <!-- reserve button -->
      <div class="reserve-btn">
        <a routerLink="/pay"><button type="button" class="btn btn-primary btn-lg">예약하기</button></a>
      </div>
      <!-- reserve button -->

    </div>
    <!-- reserve page -->

  `,
  styles: [`

  `]
})
export class YapenReserveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
