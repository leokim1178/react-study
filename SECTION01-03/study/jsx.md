JSX란?

jsx 와 html은 어떻게 다른가?

1. 닫는 태그

- html

```html
<img src="image.png" alt="My Image" /> <br />
```

- 태그를 닫지 않아도 된다

- jsx

```jsx
<img src="image.png" alt="My Image" />
<br />
```

- 모든 태그를 닫아주어야 한다

2. 속성 표기법

- html

```html
<input type="text" tabindex="1" maxlength="10" readonly />
```

- 속성 이름이 모두 소문자이다

- jsx

```jsx
<input type="text" tabIndex="1" maxLength="10" readOnly />
```

- 카멜 표기법을 사용한다

3. 일부 속성명이 다르다

- html

```html
<label class="my-class" for="input-id">Name</label>
```

- jsx

```jsx
<label className="my-class" htmlFor="input-id">
  Name
</label>
```

- class → className
- for → htmlFor

```html
<input value="Hello" checked />
```

- jsx

```jsx
<input defaultValue="Hello" defaultChecked />
```

- value → defaultValue
- checked → defaultChecked

4. 표현식 사용 여부

- html

```html
<h1>{Date.now()}</h1>
```

- 중괄호로 표현식 사용 불가능

- jsx

```jsx
<h1>{Date.now()}</h1>
```

- 중괄호로 표현식 사용 가능

5. 인라인 스타일

- html

```html
<h1 style="color:red;text-decoration:underline;">Hello</h1>
```

- jsx

```jsx
<h1 style={{ color: "red", textDecoration: "underline" }}>Hello</h1>
```

- 스타일을 객체 형태로 전달

6. 주석 작성 방법

- html

```html
<!-- This is a comment -->
```

- jsx

```jsx
{
  /* This is a comment */
}
```

7. 루트 요소 규칙

- html

```html
<header></header>
<main></main>
```

- 여러 개의 루트 요소 허용
- jsx

```jsx
<div>
  <header></header>
  <main></main>
</div>
```

- 하나의 루트 요소만 허용
