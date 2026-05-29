export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0A0E1A] pointer-events-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Ambient Glowing Orbs */}
      <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow-1"></div>
      <div className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[130px] animate-pulse-slow-2"></div>
      <div className="absolute -bottom-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-teal-500/8 blur-[120px] animate-pulse-slow-1"></div>
      
      {/* Subtle radial glow from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none blur-3xl"></div>
    </div>
  );
}
