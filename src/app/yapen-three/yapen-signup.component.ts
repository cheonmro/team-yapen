import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Signup {
  id: number;
  email: string;
  name: string;
  phone: number;
  pw: number;
  pw2: number;
}

@Component({
  selector: 'app-yapen-signup',
  template: `
  <p> 회원가입 </p>
    <input class="email" [(ngModel)]="email" type="email" placeholder="이메일을 입력해주세요"><p>
    <input class="name"  [(ngModel)]="name"  type="text"  placeholder="닉네임(이름)을 입력해주세요"><p>
    <input class="phone" [(ngModel)]="phone"  type="tel"   placeholder="전화번호를 입력해주세요"><p>
    <input class="pw"    [(ngModel)]="pw"  type="password" placeholder="비밀번호를 입력해주세요"><p>
    <input class="pw2"   [(ngModel)]="pw2" type="password" placeholder="비밀번호를 한번 더 입력해주세요"><p>
    <button id="signup"  (click)="signUp()" routerLink="/main">회원가입</button><a>
    <pre>
      {{ signups | json }}
      {{ email | json }}
      {{ name | json }}
      {{ phone | json }}
      {{ pw | json }}
      {{ pw2 | json }}
    </pre>
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
  signups: Signup[];

  email = '';
  name = '';
  phone = '';
  pw = '';
  pw2 = '';

  url = 'http://localhost:3000/signups';

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<Signup[]>(this.url)
    .subscribe(signups => this.signups = signups);
  }

  maxId() {
      return this.signups.length === 0 ? 1 : Math.max(...this.signups.map(signup => signup.id)) + 1;
    }

  signUp() {
    if (this.pw !== this.pw2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    this.signUpRequest()
    .subscribe(signup => this.signups = [...this.signups, signup]);
    alert('회원가입이 완료되었습니다.');
  }

  private signUpRequest(): Observable<Signup> {
    const payload = {
      id: this.maxId(),
      email: this.email,
      name: this.name,
      phone: this.phone,
      pw: this.pw,
      pw2: this.pw2
    };
    return this.http.post<Signup>(this.url, payload);
  }
}
