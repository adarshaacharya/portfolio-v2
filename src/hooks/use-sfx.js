import useSound from 'use-sound';

export function useSfx() {
  const [playBoop] = useSound(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/boop.mp3',
    {
      volume: 0.5,
    }
  );

  const [playPop] = useSound(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/pop.mp3',
    {
      volume: 0.5,
    }
  );

  const [playClick] = useSound(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/click.mp3',
    {
      volume: 0.5,
    }
  );

  return {
    playBoop,
    playClick,
    playPop,
  };
}
