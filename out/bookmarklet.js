javascript:(function(){
const yourName="",chatgptName="chatgpt",hashtagLine="#ChatGPT\u65e5\u8a18",$=a=>document.querySelector(a),$$=a=>document.querySelectorAll(a),getChatTitle=()=>$("title").textContent,getChatContents=()=>{const a=[],c=$$("div.text-base");for(let f=0;f<c.length;f++){var b=c[f],d=b.textContent,e=b.querySelector("svg");const g=b.querySelector("img[alt]:not([alt=''])");b=yourName;e&&(b=chatgptName);g&&!yourName&&(b=g.alt||"me");e=`[${b.replace(/\s/g,"_")}.icon]`;b===chatgptName?(d=d.split("\n"),a.push(e,
...d.flatMap(h=>` ${h}`),"")):a.push(`${e} ${d}`)}return a},createScrapboxLines=()=>{const a=[],c=getChatTitle(),b=getChatContents();a.push(c);a.push((new Date).toLocaleDateString(),"");a.push(...b);a.push("",hashtagLine);return a},copyToClipboard=async a=>{await navigator.clipboard.writeText(a);alert("Copied to clipboard!")};copyToClipboard(createScrapboxLines().join("\n"));
})()