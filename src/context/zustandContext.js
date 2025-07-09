import create from 'zustand';

const zustandStore = (set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    updateTask: (id, updatedTask) => set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? updatedTask : task)),
    })),
  });
  
  const useStore = create(zustandStore);
  
  export const ZustandProvider = ({ children }) => {
    return <Provider value={useStore}>{children}</Provider>;
  };
  
  export default useStore;
