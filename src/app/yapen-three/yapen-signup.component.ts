import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-signup',
  template: `
 <p> 회원가입 </p>
    <input class="email" type="email" placeholder="이메일을 입력해주세요"><p>
    <input class="name" type="text" placeholder="닉네임을 입력해주세요"><p>
    <input class="phone" type="tel"   placeholder="전화번호를 입력해주세요"><p>
    <input class="pw" type="password" placeholder="비밀번호를 입력해주세요"><p>
    <input class="pw2" type="password" placeholder="비밀번호를 한번 더 입력해주세요"><p>
    <button id="signup">회원가입</button><a>
  `,
  styles: [`
    input, button {
      height: 5em;
      width: 25em;
    }

    #signup {
      background: #FF6464;
      color: #fff;
    }
  `]
})
export class YapenSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

