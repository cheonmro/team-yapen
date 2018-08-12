import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yapen-reserve',
  template: `
    <!-- reserve page -->
    <div class="reserve-page">

      <!-- reserve calendar & basic info -->
      <div class="reserve-info">

        <!-- reserve calendar -->
        <section class="reserve-calendar">

          <ngb-datepicker #dp (select)="onDateSelection($event)"
            class="date-picker"
            [firstDayOfWeek]="firstDayOfWeek"
            [markDisabled]="isDisabled"
            [dayTemplate]="t">
          </ngb-datepicker>

          <ng-template #t let-date="date" let-currentMonth="currentMonth"
            let-disabled="disabled">

            <span class="custom-day"
              [style.background-color]="(isDarked(date) ? '#CCC' : '')"
              [class.hidden]="date.month !== currentMonth"
              >
              {{ date.day }}
            </span>
          </ng-template>

        </section>
        <!-- reserve calendar -->

        <!-- reserve basic info table -->
        <section class="reserve-basic-info">
          <p class="today-date">오늘 <span>{{ today.getFullYear() }}년 {{ today.getMonth() + 1 }}월
            {{ today.getDate() }}일</span> <span>({{ getWeekDay(today) }})</span></p>
          <table class="basic-info-table table-bordered">
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
                <td><span>{{ selectedDate.month }}월 {{ selectedDate.day }}일 ({{ selectedDateWeekDay() }})</span>
                      은 극성수기/{{ isWeekend(selectedDate) ? '주말' : '주중' }} 요금이 적용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- reserve basic info table -->

      </div>
      <!-- reserve calendar & basic info -->

      <!-- date selected -->
      <div class="select-date">
        <p>선택일: <span>{{ selectedDate.year }}-{{ selectedDate.month }}-{{ selectedDate.day }}</span>
          <span>({{ selectedDateWeekDay() }})</span></p>
      </div>
      <!-- date selected -->

      <!-- room info -->
      <div class="room-info">

        <!-- room info table -->
        <table class="room-info-table table-bordered">

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
    .reserve-page{
      margin: 0;
      padding: 0;
      line-height: 1.3;
      font-size: 12px;
      font-family: dotum, 맑은 고딕, "Malgun Gothic", "맑은 고딕", Tahoma, Geneva, sans-serif;
      word-break: break-all;
      color: #444;
    }
    .reserve-info{
      position: relative;
      min-height: 308px;
      margin: 24px 0 0;
    }
    .reserve-calendar{
      position: absolute;
      top: 0;
      left: 0;
    }
    .reserve-basic-info{
      padding: 15px 0 0 310px;
    }
    .reserve-basic-info .today-date{
      float: right;
      margin: 0 10px 13px 0;
    }
    .basic-info-table{
      width: 100%;
    }
    .room-info{
      margin-bottom: 47px;
    }
    .room-info-table{
      width: 100%;
    }
    .total-price{
      padding: 29px 15px 0 0;
      text-align: right;
      font-size: 16px;
    }
    .reserve-btn{
      margin: 70px auto;
      text-align: center;
    }
    .reserve-btn button{
      padding: 10px 100px;
      font-weight: bold;
      font-size: 14px;
      border-radius: 3px;
      background: #ff6559;
      color: #fff;
    }
    .custom-day{
      margin: 0;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
  `]
})
export class YapenReserveComponent implements OnInit {
  selectedDate: NgbDateStruct;

  firstDayOfWeek = 7;

  weekDay: string;

  today: Date = new Date();

  // set initial date as today date
  constructor(calendar: NgbCalendar) {
    this.selectedDate = calendar.getToday();
    this.getWeekDay(this.today);
   }

  ngOnInit() {
  }

    // get weekday(요일) as string
    getWeekDay(date: Date) {
      const weekDayDate = date;
      const weekDayNumber = weekDayDate.getDay();
      return weekDayNumber === 0 ? '일' : weekDayNumber === 1 ? '월' :
              weekDayNumber === 2 ? '화' :  weekDayNumber === 3 ? '수' :
              weekDayNumber === 4 ? '목' :  weekDayNumber === 5 ? '금' : '토';
    }

    // get weekday for selected date
    selectedDateWeekDay() {
      const calendarDate = new Date(this.selectedDate.year, this.selectedDate.month - 1, this.selectedDate.day);
      return this.getWeekDay(calendarDate);
    }

    // when selecting a date, change to the date selected
    onDateSelection(date: NgbDateStruct) {
      this.selectedDate = date;
    }

    // get new date
    getEachDate(date: NgbDateStruct) {
      return new Date(date.year, date.month - 1, date.day + 1);
      // return eachDate;
    }

    // Make the dates before today color dark such as gray
    isDarked(date: NgbDateStruct) {
      return this.getEachDate(date).getTime() < this.today.getTime();
    }

    // Disable the dates bofre today & the months that are NOT current month
    isDisabled(date: NgbDateStruct, current: {month: number}) {
      const eachDate = new Date(date.year, date.month - 1, date.day + 1);
      const todayDate = new Date().getTime();
      return eachDate.getTime() < todayDate || date.month !== current.month;
    }

    // for weekend
    isWeekend(date: NgbDateStruct) {
      const eachDate = new Date(date.year, date.month - 1, date.day);
      return eachDate.getDay() === 0 || eachDate.getDay() === 6;
    }

}
