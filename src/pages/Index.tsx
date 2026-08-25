import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Zap, DollarSign, Users, TrendingUp, ArrowRight, Check, Play, Image as ImageIcon, Gift } from 'lucide-react';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return <Landing onLogin={() => setIsLoggedIn(true)} />;
};

const Landing = ({ onLogin }: { onLogin: () => void }) => (
  <div className="min-h-screen bg-background text-foreground">
    {/* Header */}
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-lg text-primary">ViewCash</div>
            <div className="text-xs text-muted-foreground">Uganda</div>
          </div>
        </div>
        <Button onClick={onLogin} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Sign In
        </Button>
      </div>
    </header>

    {/* Hero */}
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6 text-foreground">
        View. Engage. <span className="text-primary">Earn.</span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Get rewarded for engaging with brands you love. Businesses pay us to connect with you—we share the rewards.
      </p>
      <div className="flex gap-4 justify-center mb-16">
        <Button size="lg" onClick={onLogin} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button size="lg" variant="outline" className="border-primary text-primary">
          Learn More
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-20">
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary">UGX 8,450</div>
            <p className="text-sm text-muted-foreground">Avg User Balance</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-secondary">17</div>
            <p className="text-sm text-muted-foreground">Active Campaigns</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-accent">2.5K+</div>
            <p className="text-sm text-muted-foreground">Engaged Users</p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-muted/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <Eye className="w-8 h-8 text-primary mb-2" />
              <CardTitle>View Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Browse sponsored content from real businesses looking to reach you.</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <Zap className="w-8 h-8 text-secondary mb-2" />
              <CardTitle>Engage & Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Watch videos, view photos, or complete simple tasks to earn rewards.</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <DollarSign className="w-8 h-8 text-accent mb-2" />
              <CardTitle>Get Rewarded</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Accumulate balance and withdraw your earnings to your mobile money.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Revenue Model */}
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why This Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <TrendingUp className="w-8 h-8 text-primary mb-2" />
            <CardTitle>For Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Earn rewards for activities you enjoy</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>No upfront deposits required</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Withdraw anytime to mobile money</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <Users className="w-8 h-8 text-secondary mb-2" />
            <CardTitle>For Businesses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Pay only for real engagement</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Reach thousands of active users</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Detailed campaign analytics</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-r from-primary to-accent py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
        <p className="text-lg mb-8 opacity-90">Join thousands of Ugandans earning rewards on ViewCash.</p>
        <Button size="lg" onClick={onLogin} className="bg-white text-primary hover:bg-white/90">
          Sign Up Now
        </Button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>© 2024 ViewCash Uganda. Earn rewards. Engage authentically.</p>
      </div>
    </footer>
  </div>
);

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'history'>('overview');

  // Sample data
  const user = {
    name: 'Namukwaya',
    balance: 8450,
    pendingRewards: 2100,
  };

  const campaigns = [
    {
      id: 1,
      title: 'Coca-Cola New Taste',
      type: 'video',
      reward: 500,
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1554866585-f22e6b1d0f7c?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'MTN Mobile Promo',
      type: 'photo',
      reward: 300,
      duration: '1 min',
      image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Samsung Galaxy Launch',
      type: 'survey',
      reward: 1000,
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Stanbic Bank Offer',
      type: 'offer',
      reward: 750,
      duration: '3 min',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop',
    },
  ];

  const history = [
    { id: 1, title: 'Viewed Airtel Campaign', amount: 250, date: 'Today' },
    { id: 2, title: 'Completed MTN Survey', amount: 500, date: 'Yesterday' },
    { id: 3, title: 'Referral Bonus', amount: 1000, date: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="font-bold text-lg text-primary">ViewCash</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
            <Button onClick={onLogout} variant="outline" className="border-border text-foreground hover:bg-muted">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 border-primary text-white">
            <CardContent className="pt-6">
              <p className="text-sm opacity-90 mb-2">Current Balance</p>
              <div className="text-4xl font-bold">UGX {user.balance.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-secondary text-foreground">
            <CardContent className="pt-6">
              <p className="text-sm opacity-90 mb-2">Pending Rewards</p>
              <div className="text-4xl font-bold">UGX {user.pendingRewards.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Available Campaigns</p>
              <div className="text-4xl font-bold text-accent">17</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          {['overview', 'campaigns', 'history'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-3 font-medium border-b-2 transition ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-6 flex flex-col gap-2">
                  <Gift className="w-6 h-6" />
                  Withdraw Earnings
                </Button>
                <Button variant="outline" className="border-border h-auto py-6 flex flex-col gap-2">
                  <Users className="w-6 h-6" />
                  Refer Friends
                </Button>
                <Button variant="outline" className="border-border h-auto py-6 flex flex-col gap-2">
                  <TrendingUp className="w-6 h-6" />
                  View Stats
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {history.map((item) => (
                    <div key={item.id} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                      <div className="text-lg font-bold text-primary">+UGX {item.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-card border-border overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-muted relative overflow-hidden">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground">{campaign.title}</h3>
                      <p className="text-xs text-muted-foreground capitalize">{campaign.type}</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-bold">
                      +UGX {campaign.reward}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Duration: {campaign.duration}</p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {campaign.type === 'video' && <Play className="w-4 h-4 mr-2" />}
                    {campaign.type === 'photo' && <ImageIcon className="w-4 h-4 mr-2" />}
                    {campaign.type === 'survey' && <Zap className="w-4 h-4 mr-2" />}
                    {campaign.type === 'offer' && <Gift className="w-4 h-4 mr-2" />}
                    Start Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Rewards History</CardTitle>
              <CardDescription>All your completed tasks and earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {history.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="text-lg font-bold text-primary">+UGX {item.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Index;
