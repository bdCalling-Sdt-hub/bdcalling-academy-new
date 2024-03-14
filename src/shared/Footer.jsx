import Icon from "@/components/Common/icon";
import useCategory from "@/hooks/useCategory";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import footerLink from "../../public/db/footer.json";

const Footer = () => {
  const { usefulLinks, description, contacts, paymentImages } = footerLink;
  const { category: categories } = useCategory();

  return (
    <footer className="bg-[#e6f8ff]">
      <div className="container pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-0  text-base-content items-center">
          <aside>
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </a>
            <p className="mt-4">{description}</p>
            <h4 className="font-bold mt-4 mb-2">Share Now</h4>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/bdcallingacademy"
                target="_blank"
              >
                <Icon>
                  <Facebook color="#e8e3e3" />
                </Icon>
              </a>
              <a
                href="https://www.linkedin.com/company/bdcallingitltd"
                target="_blank"
              >
                <Icon>
                  <Linkedin color="#e8e3e3" />
                </Icon>
              </a>
              <a href="https://www.youtube.com/@bdCalling" target="_blank">
                <Icon>
                  <Youtube color="#e8e3e3" />
                </Icon>
              </a>
              <a href="mailto:info@bdcallingacademy.com">
                <Icon>
                  <Mail color="#e8e3e3" />
                </Icon>
              </a>
            </div>
          </aside>
          <nav>
            <header className="font-bold mb-6 text-lg">Useful Links</header>
            {usefulLinks.map((link, index) => (
              <Link
                key={index}
                href={link?.link}
                className="block mb-2 hover:underline transition"
              >
                {link?.title}
              </Link>
            ))}
          </nav>
          <nav>
            <header className="font-bold mb-6 text-lg">
              Course Categories
            </header>
            {categories?.slice(0, 8).map((link, index) => (
              <Link
                key={index}
                href="/courses"
                className="block mb-2 hover:underline transition"
              >
                {link.category_name === "ux/ui design" ? (
                  <span>{`UX/UI Design`}</span>
                ) : (
                  <span className="capitalize">{link.category_name}</span>
                )}
              </Link>
            ))}
          </nav>
          <nav>
            <header className="font-bold mb-6 text-lg">Contact Info</header>
            <a href="tel:+88 01321231802">
              <div className="flex items-center gap-2">
                <Icon>
                  <Phone color="#e8e3e3" size={25} />
                </Icon>
                <p>+88 01321231802</p>
              </div>
            </a>
            <a href="mailto:info@bdcallingacademy.com">
              <div className="flex items-center gap-2 mt-4">
                <Icon>
                  <Mail color="#e8e3e3" />
                </Icon>
                <p>info@bdcallingacademy.com</p>
              </div>
            </a>
            <div className="flex items-center gap-2 mt-4">
              <Icon>
                <MapPinned size={40} color="#e8e3e3" absoluteStrokeWidth />
              </Icon>
              <p>
                Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219
              </p>
            </div>
          </nav>
          <div></div>
          <div>
            <h2 className="text-lg font-semibold border-r-2 border-primary">
              Online Transaction Method
            </h2>
          </div>
          <nav className="lg:col-span-2">
            <div className="flex gap-1">
              {paymentImages.map((img, index) => (
                <div key={index} className="bg-white  rounded-md px-2 py-1">
                  <img
                    src={img.imgLink}
                    alt={`${img.title} logo`}
                    width={img.title === "ssl" ? 150 : 80}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t py-7">
        <div className="container lg:flex items-center justify-between">
          <div>
            <a href="#" className="border-r mr-1 px-1">
              Privacy Policy
            </a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>
            <p>© 2024 Bdcalling Academy. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
