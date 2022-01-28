import MotionBG from "./MotionBG";

export default function RevampIntro() {



  return (
    <div class="Wrap">
      <div class="box">
        <MotionBG />
      </div>
      <div class="box overlay ">
        <h1>
          <span class="text_1">Hey there, I'm Adonis!</span>
          <span class="text_2">I'm a Software Engineer!</span>
        </h1>

        <a href="#ContactMe">
          <button > Contact Me </button>
        </a>
      </div>
    </div>
  );
}
