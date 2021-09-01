import useSound from 'use-sound';

export function useSfx() {
  const [playPop] = useSound(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/pop.mp3',
    {
      volume: 0.5,
    }
  );

  return {
    playPop,
  };
}
