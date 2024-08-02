import SnakeGame from '../components/SnakeGame';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Snake Game</h1>
      <SnakeGame />
    </div>
  );
};

export default Index;
