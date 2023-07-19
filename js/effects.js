const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsContainer = document.querySelector('.img-upload__effects');
const effectValue = document.querySelector('.effect-level__value');
const allEffects = document.querySelectorAll('.effects__radio');

const EFFECTS = {
  none: {
    filter: 'none',
  },
  chrome: {
    filter: {
      min: 0,
      max: 1
    },
    step: 0.1,
    unit: ''
  },
  sepia: {
    filter: {
      min: 0,
      max: 1
    },
    step: 0.1,
    unit: ''
  },
  invert: {
    filter: {
      min: 0,
      max: 100
    },
    step: 1,
    unit: '%'
  },
  blur: {
    filter: {
      min: 0,
      max: 3
    },
    step: 0.1,
    unit: 'px'
  },
  brightness: {
    filter: {
      min: 1,
      max: 3
    },
    step: 0.1,
    unit: ''
  }
};

effectValue.value = 80;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: effectValue.value,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
});

const effectCheck = (effectsArray, effectsObjects) => {
  effectsArray.forEach((element) => {
    element.addEventListener('change', (evt) => {
      if (evt.target.checked) {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: effectsObjects.element.filter.min,
            max: effectsObjects.element.filter.max,
          },
          step: effectsObjects.element.step,
        });
        document.querySelector(`#effect-${element}`).style.filter = effectValue.value + effectsObjects.element.unit;
      }
    });
  });
};

effectCheck(allEffects, EFFECTS);
