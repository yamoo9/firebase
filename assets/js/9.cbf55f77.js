(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Firebase 인증 방법 중 외부 공급자(예: Google, GitHub, Facebook)를 사용하는 방법을 학습합니다.")]),t._v(" "),t._m(1),t._v(" "),a("ol",[a("li",[a("p",[a("router-link",{attrs:{to:"./email-password.html#firebase-로그인-방법-설정"}},[t._v("Firebase 로그인 방법 설정")]),t._v("을 참고하여 Goggle 사용을 활성화 합니다.")],1)]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t.$withBase("/images/firebase-login-google-popup.png"),alt:""}}),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("보다 자세한 내용은 "),a("a",{attrs:{href:"https://firebase.google.com/docs/auth/web/google-signin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google으로 인증하기"),a("OutboundLink")],1),t._v(" 문서를 참고합니다.")])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/firebase-login-github-callback.png"),alt:""}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 애플리케이션 등록"),a("OutboundLink")],1),t._v(" 페이지로 이동한 다음\n입력해야 할 정보를 기입합니다. 복사했던 콜백 URL은 Authentication callback URL 입력 필드에 붙여 넣습니다.\n"),a("code",[t._v("Register application")]),t._v(" 버튼을 누르면 애플리케이션이 GitHub에 등록됩니다.")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/firebase-login-github-register.png"),alt:""}}),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/firebase-login-github-clientID.png"),alt:""}}),t._v(" "),t._m(10),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/firebase-login-github-input.png"),alt:""}}),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t.$withBase("/images/firebase-login-github-popup.png"),alt:""}}),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("잠깐?")]),t._v(" "),a("p",[t._v("인증 허용된 애플리케이션은 "),a("a",{attrs:{href:"https://github.com/settings/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 애플리케이션 설정"),a("OutboundLink")],1),t._v("에서 찾아 취소(Revoke)할 수 있습니다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("보다 자세한 내용은 "),a("a",{attrs:{href:"https://firebase.google.com/docs/auth/web/github-auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub으로 인증하기"),a("OutboundLink")],1),t._v(" 문서를 참고합니다.")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"외부-공급자-인증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-공급자-인증","aria-hidden":"true"}},[this._v("#")]),this._v(" 외부 공급자 인증")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"google-인증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-인증","aria-hidden":"true"}},[this._v("#")]),this._v(" Google 인증")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("컴포넌트 메서드 "),s("code",[this._v("signInWithGoogle")]),this._v("을 추가한 후, Google 인증을 팝업으로 띄우는 코드를 작성합니다. 인증이 성공할 경우,\n"),s("code",[this._v("authUser")]),this._v(" 컴포넌트 데이터에 응답 받은 결과의 "),s("code",[this._v("user")]),this._v("를 할당합니다. 오류가 발생한 경우는 콘솔에 오류 메시지를 출력합니다.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signInWithGoogle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GoogleAuthProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signInWithPopup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("잠깐!")]),t._v(" "),a("p",[a("code",[t._v("signInWithGoogle")]),t._v(" 메서드의 성공 결과는 컴포넌트 생성 시점 훅 함수에서 처리합니다.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onAuthStateChanged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("Google 인증 메서드를 실행시키는 버튼을 만들어 클릭하면 Google 인증 팝업 창이 뜹니다. 로그인에 성공하면\n애플리케이션으로 로그인 된 사용자 정보를 받아 옵니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-인증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-인증","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub 인증")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Firebase 로그인 방법 > GitHub 사용 설정을 누른 후, 콜백 URL을 복사합니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("테스트 목적이라면 홈 페이지 URL 값을 "),s("code",[this._v("localhost")]),this._v("로 사용하고, 실제 서비스 목적일 경우 서비스 페이지 URL을 입력합니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("애플리케이션 등록이 완료되면 "),s("code",[this._v("Client ID")]),this._v(", "),s("code",[this._v("Client Secret")]),this._v(" 코드가 발급되어 화면에 표시됩니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("발급 받은 "),s("code",[this._v("Client ID")]),this._v(", "),s("code",[this._v("Client Secret")]),this._v(" 코드를 복사하여 GitHub 사용 설정에 붙여 넣고 "),s("code",[this._v("저장")]),this._v(" 버튼을 누릅니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("애플리케이션에 GitHub 인증을 처리하는 메서드를 추가하고 코드를 작성합니다.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signInWithGitHub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GithubAuthProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signInWithPopup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"6"}},[s("li",[this._v("GitHub 인증 메서드를 실행시키는 버튼을 만들어 클릭하면 GitHub 인증 팝업 창이 뜹니다.\n"),s("code",[this._v("Authorize {사용자_계정}")]),this._v(" 버튼을 누르면 애플리케이션 로그인이 완료됩니다.")])])}],!1,null,null,null);e.options.__file="sns-login.md";s.default=e.exports}}]);