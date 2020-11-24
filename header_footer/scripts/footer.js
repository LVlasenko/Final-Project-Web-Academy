export class Footer {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderContactInfo();
    this._renderSvgElem();
    this._renderInputContainer();
    this._renderSocialContainer();
    this._renderBottomTextBlock();
    this._renderChatIcon();
    this._renderChatForm();
    this._openChat();
    this._hideChat();
  }

  _renderContactInfo() {
    this._contactInfoBlock = document.createElement("div");
    this._contactInfoBlock.classList.add("contact-info");
    this._contactInfoBlock.innerHTML = `
        <div ><span>500 Terry Francois Street </br> San Francisco, CA 94158 </br> info@mysite.com </br> Tel: 123-456-7890 </br> Fax: 123-456-7890</span></div>
        <div class="midbox-wrap"><h6>Opening Hours</h6> <span>Mon - Fri: 8am - 8pm </br> Saturday: 9am - 7pm </br> ​Sunday: 9am - 8pm</span></div>
        <div class="midbox-wrap"><h6>Delivery Hours</h6><span>Mondays : 8am - 1pm </br> Wednesdays:  8am - 1pm </br> Fridays:  8am - 1pm</span></div>
        `;
    this._root.append(this._contactInfoBlock);
  }

  _renderSvgElem() {
    this._svgImg = document.createElement("img");
    this._svgImg.classList.add("svg-house");
    this._svgImg.src = "../icons/house_little.svg";
    this._root.append(this._svgImg);
  }

  _renderInputContainer() {
    this._inputBlock = document.createElement("div");
    this._inputBlock.classList.add("input-container");
    this._inputBlock.innerHTML = `
        <h3>Get the Latest News & </br> Updates from Our Farm</h3>
        <div class="input-wrapp">
          <label class="foot-label" for="eml">Enter your email here ^ ^</label>
          <input type="text" placeholder="Email" id="eml">
        </div>
        <button>Join</button>
        `;
    this._root.append(this._inputBlock);
  }

  _renderSocialContainer() {
    this._socialBlock = document.createElement("div");
    this._socialBlock.classList.add("social-container");
    this._socialBlock.innerHTML = `
        <a href="https://www.facebook.com"><h2>Facebook</h2></a>
        <div class="twit-wrap">
          <a href="https://twitter.com/"><h2>Twitter</h2></a>
        </div>
        <a href="https://www.instagram.com/"><h2>Instagram</h2></a>
        `;
    this._root.append(this._socialBlock);
  }

  _renderBottomTextBlock() {
    this._bottomBlock = document.createElement("div");
    this._bottomBlock.classList.add("bottom-text");
    this._bottomBlock.innerHTML = `
        <span>© 2023 by Deerfield Farm. Proudly created with</span>
        <a href="">Wix.com</a>
        `;
    this._root.append(this._bottomBlock);
  }

  _renderChatIcon() {
    this._chatIcon = document.createElement("div");
    this._chatIcon.classList.add("chat-icon");
    this._chatIcon.innerHTML = `
        <span class="mdi mdi-chat-processing"></span>
        `;
    this._root.append(this._chatIcon);
  }

  _renderChatForm() {
    this._chatBox = document.createElement("div");
    this._chatBox.classList.add("chat-box-wraper");
    this._chatBox.innerHTML = `
    <div class="chat-box-content">
          <button class="hide-chat-btn">
            <span class="mdi mdi-close-thick"></span>
          </button>
          <div class="smile">
            <span class="mdi mdi-emoticon-outline"></span>
          </div>
          <div class="divText"><h2>Let's Chat!</h2></div>
          <div class="divText"><span>Ask me any question.</span></div>
          <div class="divText"><span>We'll replay as soon as we can</span></div>
        </div>
        <div class="chat-box-content"></div>
        <div class="chat-box-content">
          <span class="mdi mdi-emoticon-outline"></span>
          <input type="text" placeholder="Type your message..." />
          <span class="mdi mdi-attachment"></span>
        </div>
    `;
    this._root.append(this._chatBox);
  }

  _openChat() {
    this._chatBox = document.querySelector(".chat-box-wraper");
    this._chatOpener = document.querySelector(".chat-icon");
    this._chatOpener.addEventListener("click", () => {
      this._chatBox.classList.add("active");
    });
  }

  _hideChat() {
    this._chatHide = document.querySelector(".hide-chat-btn");
    this._chatHide.addEventListener("click", () => {
      this._chatBox.classList.remove("active");
    });
  }
}
