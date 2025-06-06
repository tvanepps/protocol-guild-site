import { FC, useState } from 'react'
import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import DonorSection from '../components/DonorSection'
import Grid from '../components/Grid'
import HeroLockup from '../components/HeroLockup'
import medallionSvg from '../assets/images/medallion.svg'
import Navbar from '../components/Navbar'
import DuneTable from '../components/DuneTable'
import TokenCarousel from '../components/TokenCarousel'
import { pledgeContent } from '../content/pledge'
import chainsImage from '../assets/images/chains.png'
import DuneStat from '../components/DuneStat'


const Pledge: FC = () => {

  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % pledgeContent.quotes.length);
  };

  const previousQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + pledgeContent.quotes.length) % pledgeContent.quotes.length);
  };

  const goToQuote = (index: number) => {
    setCurrentQuote(index);
  };

  return (
    <main>
      <Section background="brand-primary" className="min-h-[500px] md:min-h-[700px] flex flex-col pb-8 md:pb-16 mt-0" >
        <img
          src={chainsImage}
          alt="Ethereum chains"
          className="absolute top-0 right-0 h-full w-auto object-cover object-right z-0 hidden md:block"
          style={{ maxWidth: 'none' }}
        />
        <Section.Row>
          <Grid>
            <Grid.Item span={3}>
              <Navbar theme="brand" />
            </Grid.Item>
          </Grid>
        </Section.Row>
        <Section.Row 
          className="min-h-0 flex items-center"
        >
          <Grid>
            <Grid.Item span={6} className="flex flex-col gap-4 min-h-[200px] my-8 md:my-16">
              <HeroLockup theme="light" className="w-[70%] md:w-[75%] lg:w-[60%] h-auto min-h-0 flex-shrink-1"  />
            </Grid.Item>
          </Grid>
        </Section.Row>
        <Section.Row className="flex-none">
          <Grid>
            <Grid.Item span={6} className="flex flex-col gap-3 mt-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)]">
                {pledgeContent.hero.title}
              </h1>
              <p className="text-lg leading-[23px] text-[var(--gray-dark)]">
                {pledgeContent.hero.subtitle}
              </p>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
      
      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--white)]">{pledgeContent.value.title}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              {pledgeContent.value.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  color="var(--white)"
                />
              ))}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-4">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--white)] mb-4">
                {pledgeContent.pledge.title}
              </h2>
              <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--white)]">{pledgeContent.pledge.description}</h2>
              <a href={pledgeContent.pledge.buttonLink} className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block">
                {pledgeContent.pledge.buttonText}
              </a>
              <img 
                src={medallionSvg}
                alt="Protocol Guild medallion" 
                className="mt-8 w-48 transform-gpu"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                  imageRendering: '-webkit-optimize-contrast'
                }}
              />
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col">
              <DonorSection theme="light" type="Partners" featured={true}/>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--white)]">{pledgeContent.ecosystem.title}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[var(--white)] text-base sm:text-sm">{pledgeContent.ecosystem.table.title}</p>
                <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="text-[var(--white)] text-base sm:text-sm">View on Dune</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <DuneTable queryId={pledgeContent.ecosystem.table.duneQueryId} theme="dark" />
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <DuneStat
                  title={pledgeContent.ecosystem.stats[0].title}
                  variableName={pledgeContent.ecosystem.stats[0].variableName}
                  queryId={pledgeContent.ecosystem.stats[0].queryId}
                  theme="dark"
                />
                <DuneStat
                  title={pledgeContent.ecosystem.stats[1].title}
                  variableName={pledgeContent.ecosystem.stats[1].variableName}
                  queryId={pledgeContent.ecosystem.stats[1].queryId}
                  theme="dark"
                />
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-4">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--white)] mb-4">
                {pledgeContent.planning.title}
              </h2>
              <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--white)]">{pledgeContent.planning.description}</h2>
              <a href={pledgeContent.pledge.buttonLink} className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit">
                {pledgeContent.planning.buttonText}
              </a>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col">
              <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--white)] italic">{pledgeContent.planning.quote}</h2>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-4">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--white)] mb-4">
                {pledgeContent.stability.title}
              </h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="relative h-[280px]">
                <div className="overflow-hidden absolute inset-0">
                  <div 
                    className="flex h-full transition-transform duration-500 ease-in-out" 
                    style={{ transform: `translateX(-${currentQuote * 100}%)` }}
                  >
                    {pledgeContent.quotes.map((quote, index) => (
                      <div key={index} className="min-w-full px-12 md:px-16">
                        <h2 className="!text-[16px] md:!text-lg !font-normal !leading-[20px] md:!leading-[24px] !text-[var(--white)] italic">
                          {quote.text} <span className="block mt-4">-{quote.author}</span>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={previousQuote} 
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                
                <button 
                  onClick={nextQuote} 
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M9 18l6-6-6-6"/></svg>
                </button>

                <div className="flex justify-center gap-[8px] absolute -bottom-4 left-0 right-0">
                  {pledgeContent.quotes.map((_quote, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToQuote(index)}
                      className={`w-[16px] h-[16px] rounded-full transition-colors focus:outline-none p-0 ${
                        currentQuote === index ? 'bg-[var(--brand-primary)]' : 'bg-gray-500'
                      }`}
                      aria-label={`Go to quote ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Grid.Item>

          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-dark" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--white)]">{pledgeContent.donate.title}</h2>
              <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--white)]">{pledgeContent.donate.description}</h2>
              <a href={pledgeContent.donate.buttonLink} target="_blank" rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block">
                {pledgeContent.donate.buttonText}
              </a>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col h-full items-center justify-center">
              <TokenCarousel theme="dark" />
            </Grid.Item>

          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default Pledge