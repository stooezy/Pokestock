const countState = atom({
  key: 'countState',
  default: 0,
});

// const addCount = useSetRecoilState(countState)((currentVal) => currentVal++);

export { countState };
